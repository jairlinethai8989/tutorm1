import { ServerSessionRecord, OIDCHandshakeState, ControlCenterAuditRecord } from './types';
import { Redis } from '@upstash/redis';

const isProductionOrPreview =
  process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV !== undefined;

export interface SessionStore {
  // Session methods
  createSession(session: ServerSessionRecord): Promise<void>;
  getSession(sessionId: string): Promise<ServerSessionRecord | null>;
  touchSession(sessionId: string): Promise<void>;
  revokeSession(sessionId: string): Promise<void>;

  // Atomic Handshake single-use consumption
  saveHandshake(txnId: string, state: OIDCHandshakeState): Promise<void>;
  getdelHandshake(txnId: string): Promise<OIDCHandshakeState | null>;

  // Daily Partitioned Audit Sink
  appendAuditRecord(record: ControlCenterAuditRecord): Promise<void>;
  getRecentAuditRecords(days: number): Promise<ControlCenterAuditRecord[]>;

  // Server-Side Telemetry Cache
  getCachedTelemetry(key: string): Promise<string | null>;
  setCachedTelemetry(key: string, data: string, ttlSeconds: number): Promise<void>;
}

// In-Memory store strictly for local offline development
class LocalDevMemoryStore implements SessionStore {
  private sessions = new Map<string, ServerSessionRecord>();
  private handshakes = new Map<string, OIDCHandshakeState>();
  private auditRecords: ControlCenterAuditRecord[] = [];
  private telemetryCache = new Map<string, { data: string; expiresAt: number }>();

  async createSession(session: ServerSessionRecord): Promise<void> {
    this.sessions.set(session.sessionId, session);
  }

  async getSession(sessionId: string): Promise<ServerSessionRecord | null> {
    return this.sessions.get(sessionId) || null;
  }

  async touchSession(sessionId: string): Promise<void> {
    const s = this.sessions.get(sessionId);
    if (s) {
      s.lastActiveAt = Date.now();
    }
  }

  async revokeSession(sessionId: string): Promise<void> {
    this.sessions.delete(sessionId);
  }

  async saveHandshake(txnId: string, state: OIDCHandshakeState): Promise<void> {
    this.handshakes.set(txnId, state);
  }

  async getdelHandshake(txnId: string): Promise<OIDCHandshakeState | null> {
    const val = this.handshakes.get(txnId);
    if (val) {
      this.handshakes.delete(txnId);
      return val;
    }
    return null;
  }

  async appendAuditRecord(record: ControlCenterAuditRecord): Promise<void> {
    this.auditRecords.unshift(record);
    if (this.auditRecords.length > 500) {
      this.auditRecords.pop();
    }
  }

  async getRecentAuditRecords(_days: number): Promise<ControlCenterAuditRecord[]> {
    return this.auditRecords;
  }

  async getCachedTelemetry(key: string): Promise<string | null> {
    const item = this.telemetryCache.get(key);
    if (!item) return null;
    if (Date.now() > item.expiresAt) {
      this.telemetryCache.delete(key);
      return null;
    }
    return item.data;
  }

  async setCachedTelemetry(key: string, data: string, ttlSeconds: number): Promise<void> {
    this.telemetryCache.set(key, {
      data,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });
  }
}

const TOUCH_SESSION_LUA = `
local key = KEYS[1]
local now = tonumber(ARGV[1])
if redis.call('EXISTS', key) == 1 then
    local raw = redis.call('GET', key)
    if raw then
        local data = cjson.decode(raw)
        data.lastActiveAt = now
        redis.call('SET', key, cjson.encode(data), 'KEEPTTL')
        return 1
    end
end
return 0
`;

// Redis / Vercel KV store (Fail-closed on production/preview)
class UpstashRedisStore implements SessionStore {
  private redis: Redis;

  constructor(url: string, token: string) {
    this.redis = new Redis({ url, token });
  }

  async createSession(session: ServerSessionRecord): Promise<void> {
    // TTL matches 8h absolute cap in seconds
    await this.redis.set(`tutor_m1_cc_sess:${session.sessionId}`, JSON.stringify(session), {
      ex: 28800,
    });
  }

  async getSession(sessionId: string): Promise<ServerSessionRecord | null> {
    const raw = await this.redis.get<string | ServerSessionRecord>(
      `tutor_m1_cc_sess:${sessionId}`
    );
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  async touchSession(sessionId: string): Promise<void> {
    const key = `tutor_m1_cc_sess:${sessionId}`;
    await this.redis.eval(TOUCH_SESSION_LUA, [key], [Date.now().toString()]);
  }

  async revokeSession(sessionId: string): Promise<void> {
    await this.redis.del(`tutor_m1_cc_sess:${sessionId}`);
  }

  async saveHandshake(txnId: string, state: OIDCHandshakeState): Promise<void> {
    await this.redis.set(`tutor_m1_oidc_txn:${txnId}`, JSON.stringify(state), {
      ex: 600, // 10 minutes
    });
  }

  async getdelHandshake(txnId: string): Promise<OIDCHandshakeState | null> {
    // Atomic GETDEL prevents race conditions
    const raw = await this.redis.getdel<string | OIDCHandshakeState>(
      `tutor_m1_oidc_txn:${txnId}`
    );
    if (!raw) return null;
    return typeof raw === 'string' ? JSON.parse(raw) : raw;
  }

  async appendAuditRecord(record: ControlCenterAuditRecord): Promise<void> {
    const dateKey = record.timestamp.slice(0, 10);
    const redisKey = `tutor_m1_audit:${dateKey}`;
    await this.redis.lpush(redisKey, JSON.stringify(record));
    // 90 days expiration per daily partition
    await this.redis.expire(redisKey, 7776000);
  }

  async getRecentAuditRecords(days: number = 7): Promise<ControlCenterAuditRecord[]> {
    const results: ControlCenterAuditRecord[] = [];
    const now = new Date();
    for (let i = 0; i < days; i++) {
      const d = new Date(now.getTime() - i * 86400000);
      const dateKey = d.toISOString().slice(0, 10);
      const items = await this.redis.lrange<string>(`tutor_m1_audit:${dateKey}`, 0, 100);
      if (items && items.length > 0) {
        for (const item of items) {
          try {
            results.push(typeof item === 'string' ? JSON.parse(item) : item);
          } catch {}
        }
      }
    }
    return results;
  }

  async getCachedTelemetry(key: string): Promise<string | null> {
    const raw = await this.redis.get<unknown>(key);
    if (!raw) return null;
    if (typeof raw === 'string') return raw;
    if (typeof raw === 'object') return JSON.stringify(raw);
    return null;
  }

  async setCachedTelemetry(key: string, data: string, ttlSeconds: number): Promise<void> {
    await this.redis.set(key, data, { ex: ttlSeconds });
  }
}

let storeInstance: SessionStore | null = null;

export function resetSessionStoreForTesting(): void {
  storeInstance = null;
}

export function getSessionStore(): SessionStore {
  if (storeInstance) return storeInstance;

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (redisUrl && redisToken) {
    storeInstance = new UpstashRedisStore(redisUrl, redisToken);
    return storeInstance;
  }

  if (isProductionOrPreview) {
    throw new Error(
      'FATAL: Production/Preview environment requires UPSTASH_REDIS_REST_URL or KV_REST_API_URL. Failing closed.'
    );
  }

  // Permitted exclusively in local offline development
  storeInstance = new LocalDevMemoryStore();
  return storeInstance;
}
