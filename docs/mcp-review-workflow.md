# Tutor M.1 project MCP — installed configuration

Prepared 2026-09-05. Repository: D:/Project APP/AntiGravity/Tutor M1.
Verified origin: https://github.com/jairlinethai8989/tutorm1.git.
Verified clean branch: feat/control-center-telemetry-v1.
Baseline: 5a62cf3274c22d012cd29d942beb7b0ff97b6016.

## Installation status
Installed from the prepared Documents/Codex kit on 2026-09-05. Server, tests, project-scoped Codex and Antigravity configuration, and the ignore-rule exception are installed. Codex CLI outside the sandbox discovers tutorm1-review as enabled with exactly four allowed tools. STDIO smoke tests pass. Live tool calls from the Codex desktop and Antigravity clients still require refreshing their MCP connections and verification. No global settings, telemetry, application dependencies, branches, commits or remotes were changed; main was not merged.

## Architecture
Both desktop clients launch tools/mcp/server.mjs with Node through STDIO. The server has no dependencies, listener, API credentials, network tools, write tools or arbitrary command execution. Git subprocesses use a restricted environment and an explicit safe.directory exception for this repository only; global Git configuration is not modified.

Tools: repo_status, list_review_files, read_committed_file, diff_committed_file. Each result identifies the captured HEAD. HEAD must descend from the approved Phase A baseline. Content access is restricted to regular committed source files and a small root-file allowlist. Working-tree files, .env files, .git content, arbitrary refs and paths outside the repository are unavailable. Snapshot HEAD is resolved once per call. Multiple calls can observe different commits, so reviewers must compare returned SHAs. Path filtering does not detect a secret mistakenly committed inside an allowed source file. This tool scope does not restrict the IDE's own shell or file tools, nor other installed MCP servers.

Audit metadata (UTC time, tool, success/failure) is emitted as JSON lines on stderr, without code, paths or tokens. Host retention must be verified for durable audit history; these logs are not tamper-proof. Git commits and SHA-specific review reports are the primary audit record.

## Installed files and configuration
Installed tools/mcp/server.mjs and tools/mcp/test.mjs. Created .agents/mcp_config.json and .codex/config.toml; neither configuration file existed before installation. Both launch the installed server path. No global Antigravity configuration changes were needed.

The ignore rule now versions only the MCP configuration while retaining the skills exclusion:

    .agents/*
    !.agents/mcp_config.json

This document is installed at docs/mcp-review-workflow.md. Leave telemetry and application dependencies unchanged. Inspect the complete diff before creating any setup commit. Keep the current branch and do not merge main.

Open Tutor M1 as a trusted project in Codex and as the workspace in Antigravity. Refresh/restart MCP connections in both clients. Verify tutorm1-review exposes exactly four tools and run repo_status in each. Do not claim activation until both clients succeed. This existing projectless task may need to be reopened in the repository context by the user; it does not automatically load another folder's configuration. ChatGPT web does not consume local STDIO configuration.

## Review loop
1. Antigravity implements only user-authorized changes using its existing IDE tools.
2. Antigravity runs relevant checks, commits and pushes the feature branch using existing Git credentials. MCP does not perform these actions.
3. Hand off base SHA, head SHA, changed files, check commands/results and known deployment blockers.
4. Codex reviews the exact committed diff. Run TypeScript/build checks independently in an isolated checkout of that SHA with appropriate filesystem/network permissions. These are executable project scripts and intentionally not exposed as MCP tools. Record exit codes and the reviewed SHA.
5. Read remote CI/Vercel checks separately through authenticated GitHub tooling. No fresh Vercel status was checked during this setup. Preserve the unresolved merge gate.
6. Only the user approves merge after review and required gates pass. MCP is not an agent-to-agent messaging or automatic orchestration system.

## Validation performed
Node v24.14.0; real repository at the approved baseline. Run: node tools/mcp/test.mjs.
PASS: initialization, tools listing, all four read tools, committed source read, current committed diff, current working-tree status, seven rejected requests (traversal, environment file, absolute path, .git traversal, extra command argument, nonexistent push tool, missing source file), and metadata-only audit output.
The installed smoke test uses fileURLToPath for Windows paths containing spaces and compares HEAD, branch, dirty status, committed content and diff against Git at test time. Tests do not establish full MCP conformance, race-proof operating-system isolation, or actual client discovery. No application build was rerun because application code was unchanged.

## Rollback
Remove only the tutorm1-review entries from each client configuration and refresh both clients. Remove the added tools/docs and restore the prior ignore rule if desired. No credentials or services need revocation because none were created.

## References
https://antigravity.google/docs/mcp
https://learn.chatgpt.com/docs/extend/mcp?surface=cli
https://modelcontextprotocol.io/specification/2025-03-26/basic/transports
https://modelcontextprotocol.io/specification/2025-03-26/basic/lifecycle
