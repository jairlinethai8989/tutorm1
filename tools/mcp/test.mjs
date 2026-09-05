import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../../', import.meta.url));
function git(args) {
 const result = spawnSync('C:/Program Files/Git/cmd/git.exe', ['-C', root, ...args], { encoding: 'utf8', windowsHide: true });
 assert.equal(result.status, 0, result.stderr);
 return result.stdout;
}
const expectedHead = git(['rev-parse', 'HEAD']).trim();
const expectedBranch = git(['branch', '--show-current']).trim();
const expectedDirty = git(['status', '--porcelain=v1', '--untracked-files=normal']).length > 0;
const messages = [
 {id:1, method:'initialize',params:{protocolVersion:'2025-03-26',capabilities:{},clientInfo:{name:'test',version:'1'}}},
 {method:'notifications/initialized'},
 {id:2,method:'tools/list'},
 ...[
 ['repo_status',{}], ['list_review_files',{}],
 ['read_committed_file',{path:'src/lib/storage.ts'}],
 ['diff_committed_file',{path:'src/lib/storage.ts'}],
 ['read_committed_file',{path:'../.env'}],
 ['read_committed_file',{path:'.env'}],
 ['read_committed_file',{path:'C:/Windows/win.ini'}],
 ['read_committed_file',{path:'src/../../.git/config'}],
 ['repo_status',{command:'push'}], ['push',{}],
 ['read_committed_file',{path:'src/absent.ts'}],
 ].map(([name,args],i)=>({id:i+3,method:'tools/call',params:{name,arguments:args}}))
];
const r=spawnSync(process.execPath,[fileURLToPath(new URL('./server.mjs',import.meta.url))],{input:messages.map(m=>JSON.stringify({jsonrpc:'2.0',...m})).join('\n')+'\n',encoding:'utf8',timeout:60000,windowsHide:true});
assert.equal(r.status,0,r.stderr);
const out=r.stdout.trim().split('\n').map(s=>JSON.parse(s));
assert.equal(out.length,13);
assert.equal(out[1].result.tools.length,4);
for(const row of out.filter(m=>m.id>=3 && m.id<=6)) assert.ok(!row.result.isError,JSON.stringify(row));
for(const row of out.filter(m=>m.id>=7)) assert.equal(row.result.isError,true,JSON.stringify(row));
const status=JSON.parse(out.find(m=>m.id===3).result.content[0].text);
assert.equal(status.head,expectedHead);
assert.equal(status.branch,expectedBranch);
assert.equal(status.dirty,expectedDirty);
assert.deepEqual(out[1].result.tools.map(t=>t.name).sort(), ['diff_committed_file','list_review_files','read_committed_file','repo_status']);
assert.equal(JSON.parse(out.find(m=>m.id===5).result.content[0].text).content, git(['show', expectedHead + ':src/lib/storage.ts']));
assert.equal(JSON.parse(out.find(m=>m.id===6).result.content[0].text).diff, git(['diff','--no-ext-diff','--no-textconv','--no-renames','--no-color',status.baseline,expectedHead,'--','src/lib/storage.ts']));
assert.equal(git(['rev-parse','HEAD']).trim(), expectedHead, 'HEAD changed during test');
const audit=r.stderr.trim().split('\n').map(s=>JSON.parse(s));
assert.equal(audit.length,11);
assert.ok(audit.every(x=>Object.keys(x).sort().join(',')==='ok,time,tool'));
console.log('PASS: handshake, exactly 4 tools, committed read/diff, 7 denied requests, metadata-only audit, current HEAD/branch/dirty status.');
