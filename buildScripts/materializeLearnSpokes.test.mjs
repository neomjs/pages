import assert                              from 'node:assert/strict';
import {spawnSync}                         from 'node:child_process';
import {existsSync, mkdtempSync, statSync} from 'node:fs';
import {mkdir, readFile, rm, writeFile}    from 'node:fs/promises';
import os                                  from 'node:os';
import {join, resolve}                     from 'node:path';
import {pathToFileURL}                     from 'node:url';
import test                                from 'node:test';

import {
    fetchAndMaterializeLearnSpokes,
    materializeLearnSpokes,
    validateLearnSpokePins
} from './materializeLearnSpokes.mjs';

/**
 * @summary Runs a git command inside `repoDir` with deterministic author/committer identity and optional ISO date.
 * @param {String} repoDir
 * @param {String[]} args
 * @param {String} [isoDate]
 * @returns {String}
 */
function runGit(repoDir, args, isoDate) {
    const env = {
        ...process.env,
        GIT_AUTHOR_NAME    : 'Neo Test',
        GIT_AUTHOR_EMAIL   : 'test@neomjs.com',
        GIT_COMMITTER_NAME : 'Neo Test',
        GIT_COMMITTER_EMAIL: 'test@neomjs.com',
        ...(isoDate ? {GIT_AUTHOR_DATE: isoDate, GIT_COMMITTER_DATE: isoDate} : {})
    };
    const res = spawnSync('git', ['-C', repoDir, ...args], {encoding: 'utf-8', env});
    if (res.status !== 0) {
        throw new Error(`git ${args.join(' ')} failed in ${repoDir}: ${res.stderr || res.stdout}`)
    }
    return res.stdout.trim()
}

/**
 * @summary Initializes a local unshallow git repository and commits all current files at `isoDate`.
 * @param {String} repoDir
 * @param {String} message
 * @param {String} isoDate
 * @returns {String} 40-hex commit SHA
 */
function initAndCommitRepo(repoDir, message, isoDate) {
    runGit(repoDir, ['init', '-q']);
    runGit(repoDir, ['config', 'commit.gpgsign', 'false']);
    runGit(repoDir, ['add', '.']);
    runGit(repoDir, ['commit', '-q', '-m', message], isoDate);
    return runGit(repoDir, ['rev-parse', 'HEAD'])
}

/**
 * @summary Stages all changes in `repoDir` and creates a new commit at `isoDate`.
 * @param {String} repoDir
 * @param {String} message
 * @param {String} isoDate
 * @returns {String} 40-hex commit SHA
 */
function commitAll(repoDir, message, isoDate) {
    runGit(repoDir, ['add', '-A']);
    runGit(repoDir, ['commit', '-q', '-m', message], isoDate);
    return runGit(repoDir, ['rev-parse', 'HEAD'])
}

/**
 * @summary Builds a multi-spoke + pristine Engine fixture backed by real local multi-commit git repositories in
 * `os.tmpdir()` to test unshallow per-file `git log` timestamps, re-run delisting, prefixing, and fail-closed guards.
 * @param {Object} [overrides={}]
 * @returns {Promise<{root: String, pristineLearnDir: String, neoDir: String, baseTree: Object, spokeCheckouts: Object[]}>}
 */
async function createSyntheticWorkspace({
    collidingHubRoute   = false,
    collidingSpokeRoute = false,
    missingSpokeFile    = false
} = {}) {
    const
        root             = mkdtempSync(join(os.tmpdir(), 'pages-learn-spokes-')),
        pristineLearnDir = join(root, 'pristine-engine-learn'),
        neoDir           = join(root, 'node_modules/neo.mjs'),
        brainDir         = join(root, 'spokes/brain'),
        instDir          = join(root, 'spokes/institution'),
        devidxDir        = join(root, 'spokes/devindex');

    await mkdir(join(pristineLearnDir, 'benefits/body'), {recursive: true});
    await mkdir(join(pristineLearnDir, 'blog'), {recursive: true});
    await mkdir(join(neoDir, 'apps/portal/resources/data'), {recursive: true});

    await writeFile(join(pristineLearnDir, 'benefits/Introduction.md'), '# Neo Organism\n');
    await writeFile(join(pristineLearnDir, 'benefits/body/Speed.md'), '# Speed\n');
    await writeFile(join(pristineLearnDir, 'blog/EnginePost.md'), '# Retained Blog Asset\n');

    const baseTree = {
        data: [
            {name: 'Benefits: The Self-Evolving Software Organism', parentId: null,              isLeaf: false, id: 'Benefits'},
            {name: 'Introduction',                                  parentId: 'Benefits',                       id: 'benefits/Introduction'},
            {name: 'The Body - Application Engine',                 parentId: 'Benefits',        isLeaf: false, id: 'benefits/body'},
            {name: 'Speed',                                         parentId: 'benefits/body',                  id: 'benefits/body/Speed'},
            {name: 'Brain Interface, Fleet & Agent Tooling',        parentId: null,              isLeaf: false, id: 'AgentInterfaces', collapsed: true},
            {name: 'Neural Link',                                   parentId: 'AgentInterfaces',                id: 'agentos/NeuralLink'},
            {name: 'Retained Decisions',                            parentId: 'AgentInterfaces', isLeaf: false, id: 'AgentInterfaces/Decisions', collapsed: true},
            {name: 'ADR 0029',                                      parentId: 'AgentInterfaces/Decisions',      id: 'agentos/decisions/0029-docking-design'},
            {name: 'Guides',                                        parentId: null,              isLeaf: false, id: 'guides', collapsed: true},
            {name: 'The Core Engine',                               parentId: 'guides',          isLeaf: false, id: 'guides/coreengine', collapsed: true},
            {name: 'Core Base',                                     parentId: 'guides/coreengine',              id: 'guides/coreengine/Base'},
            {name: 'API Docs',                                      parentId: null,              isLeaf: true,  id: 'ApiDocs', route: '/docs'},
            {name: 'Tutorials',                                     parentId: null,              isLeaf: false, id: 'Tutorials', collapsed: true}
        ]
    };
    await writeFile(join(pristineLearnDir, 'tree.json'), JSON.stringify(baseTree, null, 4));

    // Brain spoke: two-commit git history so untouched guides keep Commit 1's date (`2026-01-15`) while a touched guide
    // advances to Commit 2's pin date (`2026-06-01`).
    await mkdir(join(brainDir, 'docs'), {recursive: true});
    await mkdir(join(brainDir, 'learn/benefits/brain'), {recursive: true});
    await mkdir(join(brainDir, 'learn/agentos/tooling'), {recursive: true});
    await mkdir(join(brainDir, 'learn/agentos/cloud-deployment'), {recursive: true});
    await writeFile(join(brainDir, 'learn/benefits/brain/AgentMemory.md'), '# Agent Memory\n');
    await writeFile(join(brainDir, 'learn/agentos/MemoryCore.md'), '# Memory Core v1\n');
    await writeFile(join(brainDir, 'learn/agentos/tooling/Introduction.md'), '# MCP Intro\n');
    if (!missingSpokeFile) {
        await writeFile(join(brainDir, 'learn/agentos/cloud-deployment/PipelineWiring.md'), '# Pipeline Wiring\n')
    }
    if (collidingHubRoute) {
        await writeFile(join(brainDir, 'learn/agentos/NeuralLink.md'), '# Duplicate Neural Link\n')
    }

    const brainTreeData = [
        {name: 'Benefits',                parentId: null,              isLeaf: false, id: 'Benefits'},
        {name: 'The Brain - Agent OS',    parentId: 'Benefits',        isLeaf: false, id: 'benefits/brain'},
        {name: 'Agent Memory',            parentId: 'benefits/brain',                 id: 'benefits/brain/AgentMemory'},
        {name: 'AgentInterfaces',         parentId: null,              isLeaf: false, id: 'AgentInterfaces'},
        {name: 'Agent OS',                parentId: 'AgentInterfaces', isLeaf: false, id: 'AgentOS'},
        {name: 'Memory Core',             parentId: 'AgentOS',                        id: collidingHubRoute ? 'agentos/NeuralLink' : 'agentos/MemoryCore'},
        {name: 'Tooling & Configuration', parentId: 'AgentInterfaces', isLeaf: false, id: 'AgentOS/Tooling'},
        {name: 'Introduction to MCP',     parentId: 'AgentOS/Tooling',                id: 'agentos/tooling/Introduction'},
        {name: 'Deploying the Agent OS',  parentId: 'AgentInterfaces', isLeaf: false, id: 'AgentOS/CloudDeployment'},
        {name: 'Pipeline Wiring',         parentId: 'AgentOS/CloudDeployment',        id: 'agentos/cloud-deployment/PipelineWiring'}
    ];
    await writeFile(join(brainDir, 'learn/tree.json'), JSON.stringify({data: brainTreeData}, null, 4));
    await writeFile(join(brainDir, 'docs/public-manifest.json'), JSON.stringify({
        schema    : 'public-manifest.v1',
        spoke     : 'neomjs/neo-agent-brain',
        treeFile  : 'learn/tree.json',
        treeMounts: [
            {parentId: 'Benefits',        id: 'benefits/brain',          name: 'The Brain - Agent OS'},
            {parentId: 'AgentInterfaces', id: 'AgentOS',                 name: 'Agent OS'},
            {parentId: 'AgentInterfaces', id: 'AgentOS/Tooling',         name: 'Tooling & Configuration'},
            {parentId: 'AgentInterfaces', id: 'AgentOS/CloudDeployment', name: 'Deploying the Agent OS'}
        ],
        entries: [
            {file: 'learn/benefits/brain/AgentMemory.md',              route: '/learn/benefits/brain/AgentMemory'},
            {
                file : collidingHubRoute ? 'learn/agentos/NeuralLink.md' : 'learn/agentos/MemoryCore.md',
                route: collidingHubRoute ? '/learn/agentos/NeuralLink'   : '/learn/agentos/MemoryCore'
            },
            {file: 'learn/agentos/tooling/Introduction.md',            route: '/learn/agentos/tooling/Introduction'},
            {file: 'learn/agentos/cloud-deployment/PipelineWiring.md', route: '/learn/agentos/cloud-deployment/PipelineWiring'}
        ]
    }, null, 4));
    initAndCommitRepo(brainDir, 'feat: initial brain guides', '2026-01-15T12:00:00Z');

    // Second commit touches ONLY MemoryCore.md at 2026-06-01; AgentMemory.md stays at 2026-01-15.
    if (!collidingHubRoute) {
        await writeFile(join(brainDir, 'learn/agentos/MemoryCore.md'), '# Memory Core v2\n')
    } else {
        await writeFile(join(brainDir, 'learn/agentos/NeuralLink.md'), '# Duplicate Neural Link v2\n')
    }
    const brainHead = commitAll(brainDir, 'docs: update MemoryCore only', '2026-06-01T12:00:00Z');

    // Institution spoke
    await mkdir(join(instDir, 'docs'), {recursive: true});
    await mkdir(join(instDir, 'learn'), {recursive: true});
    await writeFile(join(instDir, 'learn/Introduction.md'), '# Institution Intro\n');
    await writeFile(join(instDir, 'learn/tree.json'), JSON.stringify({
        data: [{name: 'Introduction', parentId: null, id: 'Introduction'}]
    }, null, 4));
    await writeFile(join(instDir, 'docs/public-manifest.json'), JSON.stringify({
        schema   : 'public-manifest.v1',
        spoke    : 'neomjs/neo-agent-institution',
        treeFile : 'learn/tree.json',
        treeMount: {
            parentId: 'AgentInterfaces',
            id      : collidingSpokeRoute ? 'guides/devindex' : 'institution',
            name    : 'Agent Institution'
        },
        entries: [{
            file : 'learn/Introduction.md',
            route: collidingSpokeRoute ? '/learn/guides/devindex/Introduction' : '/learn/institution/Introduction'
        }]
    }, null, 4));
    const instHead = initAndCommitRepo(instDir, 'feat: institution guide', '2026-03-10T09:00:00Z');

    // DevIndex spoke
    await mkdir(join(devidxDir, 'docs'), {recursive: true});
    await mkdir(join(devidxDir, 'learn/data-factory'), {recursive: true});
    await writeFile(join(devidxDir, 'learn/Introduction.md'), '# DevIndex Intro\n');
    await writeFile(join(devidxDir, 'learn/data-factory/Engine.md'), '# Spider Engine\n');
    await writeFile(join(devidxDir, 'learn/tree.json'), JSON.stringify({
        data: [
            {name: 'Introduction',     parentId: null,          id: 'Introduction'},
            {name: 'The Data Factory', parentId: null,          isLeaf: false, id: 'DataFactory'},
            {name: 'Spider Engine',    parentId: 'DataFactory', id: 'data-factory/Engine'}
        ]
    }, null, 4));
    await writeFile(join(devidxDir, 'docs/public-manifest.json'), JSON.stringify({
        schema   : 'public-manifest.v1',
        spoke    : 'neomjs/devindex',
        treeFile : 'learn/tree.json',
        treeMount: {parentId: 'Guides', id: 'guides/devindex', name: 'DevIndex App'},
        entries  : [
            {file: 'learn/Introduction.md',        route: '/learn/guides/devindex/Introduction'},
            {file: 'learn/data-factory/Engine.md', route: '/learn/guides/devindex/data-factory/Engine'}
        ]
    }, null, 4));
    const devidxHead = initAndCommitRepo(devidxDir, 'feat: devindex guides', '2025-08-19T15:00:00Z');

    return {
        root,
        pristineLearnDir,
        neoDir,
        baseTree,
        spokeCheckouts: [
            {spoke: 'neomjs/neo-agent-brain',       checkoutDir: brainDir,  commit: brainHead},
            {spoke: 'neomjs/neo-agent-institution', checkoutDir: instDir,   commit: instHead},
            {spoke: 'neomjs/devindex',              checkoutDir: devidxDir, commit: devidxHead}
        ]
    }
}

test('validateLearnSpokePins enforces non-empty learnSpokes and exact 40-hex commit SHAs', () => {
    const pinsPath = resolve('buildScripts/contentPins.json');
    assert.equal(existsSync(pinsPath), true);

    assert.throws(() => validateLearnSpokePins([]), /non-empty "learnSpokes"/);
    assert.throws(
        () => validateLearnSpokePins([{spoke: 'neomjs/devindex', repository: 'https://example.com/a.git', commit: 'dev'}]),
        /exact 40-hex commit SHA/
    );
    assert.doesNotThrow(() => validateLearnSpokePins([{
        spoke     : 'neomjs/devindex',
        repository: 'https://github.com/neomjs/devindex.git',
        commit    : 'fd98ff5ca7cf7f66d09cd7bb06ea513b82a8b592'
    }]));
});

test('materializeLearnSpokes composes single-door hub hierarchy, stamps per-guide git history dates, and refuses shallow checkouts', async t => {
    const {root, pristineLearnDir, neoDir, spokeCheckouts} = await createSyntheticWorkspace();
    t.after(() => rm(root, {recursive: true, force: true}));

    const result = await materializeLearnSpokes({pristineLearnDir, neoDir, spokeCheckouts});

    assert.equal(result.spokeLeafCount, 7);
    assert.equal(result.totalMarkdownLeafCount, 12);
    assert.equal(result.totalLeafCount, 13); // 12 Markdown leaves + ApiDocs

    const composed = JSON.parse(await readFile(join(neoDir, 'learn/tree.json'), 'utf-8'));
    const ids      = composed.data.map(n => n.id);

    // 1. Under Benefits: "The Brain - Agent OS" sits BEFORE "The Body - Application Engine"
    assert.ok(ids.indexOf('benefits/brain') < ids.indexOf('benefits/body'));

    // 2. Under AgentInterfaces: Brain groups + "Agent Institution" sit BEFORE "AgentInterfaces/Decisions"
    assert.ok(ids.indexOf('AgentOS') < ids.indexOf('AgentInterfaces/Decisions'));
    assert.ok(ids.indexOf('AgentOS/Tooling') < ids.indexOf('AgentInterfaces/Decisions'));
    assert.ok(ids.indexOf('AgentOS/CloudDeployment') < ids.indexOf('AgentInterfaces/Decisions'));
    assert.ok(ids.indexOf('institution') < ids.indexOf('AgentInterfaces/Decisions'));

    const instFolder = composed.data.find(n => n.id === 'institution');
    assert.equal(instFolder.name, 'Agent Institution');
    assert.equal(instFolder.parentId, 'AgentInterfaces');

    // 3. Under guides (lowercase id in hub): "DevIndex App" resolves parentId "Guides" -> "guides" and prefixes nested folders/leaves
    const devidxFolder = composed.data.find(n => n.id === 'guides/devindex');
    assert.equal(devidxFolder.name, 'DevIndex App');
    assert.equal(devidxFolder.parentId, 'guides');
    assert.ok(ids.indexOf('guides/devindex') < ids.indexOf('ApiDocs'));

    const nestedDataFactory = composed.data.find(n => n.id === 'guides/devindex/DataFactory');
    assert.equal(nestedDataFactory.parentId, 'guides/devindex');
    const engineLeaf = composed.data.find(n => n.id === 'guides/devindex/data-factory/Engine');
    assert.equal(engineLeaf.parentId, 'guides/devindex/DataFactory');

    // 4. Every node parentId resolves to a real non-leaf folder (zero orphans)
    const folders = new Set(composed.data.filter(n => n.isLeaf === false).map(n => n.id));
    for (const node of composed.data) {
        if (node.parentId !== null && node.parentId !== undefined) {
            assert.equal(folders.has(node.parentId), true, `Orphan parentId "${node.parentId}" on "${node.id}"`)
        }
    }

    // 5. Untouched guide keeps Commit 1's date (`2026-01-15`), while touched guide gets Commit 2's pin date (`2026-06-01`)
    const agentMemoryStat = statSync(join(neoDir, 'learn/benefits/brain/AgentMemory.md'));
    const memoryCoreStat  = statSync(join(neoDir, 'learn/agentos/MemoryCore.md'));
    assert.equal(new Date(agentMemoryStat.mtimeMs).toISOString().slice(0, 10), '2026-01-15');
    assert.equal(new Date(memoryCoreStat.mtimeMs).toISOString().slice(0, 10), '2026-06-01');

    const seoJson = JSON.parse(await readFile(join(neoDir, 'apps/portal/resources/data/seo.json'), 'utf-8'));
    assert.equal(seoJson['/learn/benefits/brain/AgentMemory'].lastmod, '2026-01-15');
    assert.equal(seoJson['/learn/agentos/MemoryCore'].lastmod, '2026-06-01');
    assert.equal(seoJson['/learn/institution/Introduction'].lastmod, '2026-03-10');
    assert.equal(seoJson['/learn/guides/devindex/data-factory/Engine'].lastmod, '2025-08-19');

    // 6. Shallow `--depth 1` spoke checkout is refused explicitly
    const shallowBrainDir = join(root, 'shallow-brain');
    const cloneRes        = spawnSync('git', ['clone', '-q', '--depth', '1', pathToFileURL(spokeCheckouts[0].checkoutDir).href, shallowBrainDir], {
        encoding: 'utf-8'
    });
    assert.equal(cloneRes.status, 0);

    await assert.rejects(
        () => materializeLearnSpokes({
            pristineLearnDir,
            neoDir,
            spokeCheckouts: [
                {spoke: 'neomjs/neo-agent-brain', checkoutDir: shallowBrainDir, commit: spokeCheckouts[0].commit},
                spokeCheckouts[1],
                spokeCheckouts[2]
            ]
        }),
        /Refusing shallow git checkout/
    );
});

test('re-running materializeLearnSpokes removes delisted spoke guides while preserving pristine Engine learn assets', async t => {
    const {root, pristineLearnDir, neoDir, spokeCheckouts} = await createSyntheticWorkspace();
    t.after(() => rm(root, {recursive: true, force: true}));

    await materializeLearnSpokes({pristineLearnDir, neoDir, spokeCheckouts});

    const delistedDest = join(neoDir, 'learn/agentos/cloud-deployment/PipelineWiring.md');
    assert.equal(existsSync(delistedDest), true);
    assert.equal(existsSync(join(neoDir, 'learn/blog/EnginePost.md')), true);

    // Delist `PipelineWiring.md` in a new spoke commit and re-run into the same `neoDir`.
    const brainDir     = spokeCheckouts[0].checkoutDir;
    const manifestPath = join(brainDir, 'docs/public-manifest.json');
    const treePath     = join(brainDir, 'learn/tree.json');
    const manifest     = JSON.parse(await readFile(manifestPath, 'utf-8'));
    const tree         = JSON.parse(await readFile(treePath, 'utf-8'));

    manifest.entries    = manifest.entries.filter(e => e.route !== '/learn/agentos/cloud-deployment/PipelineWiring');
    manifest.treeMounts = manifest.treeMounts.filter(m => m.id !== 'AgentOS/CloudDeployment');
    tree.data           = tree.data.filter(n => n.id !== 'AgentOS/CloudDeployment' && n.id !== 'agentos/cloud-deployment/PipelineWiring');

    await writeFile(manifestPath, JSON.stringify(manifest, null, 4));
    await writeFile(treePath, JSON.stringify(tree, null, 4));
    spokeCheckouts[0].commit = commitAll(brainDir, 'docs: delist PipelineWiring', '2026-07-01T10:00:00Z');

    const rerun = await materializeLearnSpokes({pristineLearnDir, neoDir, spokeCheckouts});
    assert.equal(rerun.spokeLeafCount, 6);
    assert.equal(existsSync(delistedDest), false, 'Delisted spoke Markdown file must be removed on re-run');
    assert.equal(existsSync(join(neoDir, 'learn/blog/EnginePost.md')), true, 'Pristine Engine learn/blog assets must survive re-run');

    const composed = JSON.parse(await readFile(join(neoDir, 'learn/tree.json'), 'utf-8'));
    assert.equal(composed.data.some(n => n.id === 'agentos/cloud-deployment/PipelineWiring'), false);

    const seoJson = JSON.parse(await readFile(join(neoDir, 'apps/portal/resources/data/seo.json'), 'utf-8'));
    assert.equal('/learn/agentos/cloud-deployment/PipelineWiring' in seoJson, false);
});

test('materializeLearnSpokes fails closed on collisions, missing anchors, branch refs, and cleans up temp clones', async t => {
    const hubCollision = await createSyntheticWorkspace({collidingHubRoute: true});
    t.after(() => rm(hubCollision.root, {recursive: true, force: true}));
    await assert.rejects(
        () => materializeLearnSpokes(hubCollision),
        /collision on "agentos\/NeuralLink"/
    );

    const spokeCollision = await createSyntheticWorkspace({collidingSpokeRoute: true});
    t.after(() => rm(spokeCollision.root, {recursive: true, force: true}));
    await assert.rejects(
        () => materializeLearnSpokes(spokeCollision),
        /collision on "guides\/devindex"/
    );

    const missingFile = await createSyntheticWorkspace({missingSpokeFile: true});
    t.after(() => rm(missingFile.root, {recursive: true, force: true}));
    await assert.rejects(
        () => materializeLearnSpokes(missingFile),
        /Missing admitted Markdown file/
    );

    const valid = await createSyntheticWorkspace();
    t.after(() => rm(valid.root, {recursive: true, force: true}));

    // Branch ref ('dev') passed as commit is rejected immediately (no 'dev' fallback)
    await assert.rejects(
        () => materializeLearnSpokes({
            pristineLearnDir: valid.pristineLearnDir,
            neoDir          : valid.neoDir,
            spokeCheckouts  : [{...valid.spokeCheckouts[0], commit: 'dev'}, valid.spokeCheckouts[1], valid.spokeCheckouts[2]]
        }),
        /exact 40-hex SHA/
    );

    // Missing hub insertion anchor (`benefits/body` renamed) fails closed instead of appending out of order
    const brokenAnchorTree = {
        data: valid.baseTree.data.map(n => n.id === 'benefits/body' ? {...n, id: 'benefits/renamed-body'} : n)
    };
    await assert.rejects(
        () => materializeLearnSpokes({
            pristineLearnDir: valid.pristineLearnDir,
            baseTree        : brokenAnchorTree,
            neoDir          : valid.neoDir,
            spokeCheckouts  : valid.spokeCheckouts
        }),
        /Missing required hub anchor "benefits\/body"/
    );

    // Verify fetchAndMaterializeLearnSpokes passes `{shallow: false}` to `fetchRevision` and cleans `tempRoot` on error
    const tempRoot     = join(valid.root, 'temp_spokes_cleanup_check');
    let   capturedOpts = null;

    await assert.rejects(
        () => fetchAndMaterializeLearnSpokes({
            pristineLearnDir: valid.pristineLearnDir,
            contentPins     : {
                learnSpokes: [{
                    spoke     : 'neomjs/devindex',
                    repository: 'https://github.com/neomjs/devindex.git',
                    commit    : '0000000000000000000000000000000000000000'
                }]
            },
            fetchRevision: (_url, _ref, _dir, _sparse, opts) => {
                capturedOpts = opts;
                return 'deadbeef'
            },
            neoDir: valid.neoDir,
            tempRoot
        }),
        /Failed to fetch neomjs\/devindex/
    );
    assert.deepEqual(capturedOpts, {shallow: false});
    assert.equal(existsSync(tempRoot), false);
});

test('materializeLearnSpokes enforces excludedDirs and rewrites sourceLinkRoots links outside code to pinned GitHub URLs', async t => {
    const {root, pristineLearnDir, neoDir, spokeCheckouts} = await createSyntheticWorkspace();
    t.after(() => rm(root, {recursive: true, force: true}));

    const brainDir = spokeCheckouts[0].checkoutDir;
    await mkdir(join(brainDir, 'ai/mcp/server'), {recursive: true});
    await writeFile(join(brainDir, 'ai/services.mjs'), 'export default {};\n');

    await writeFile(
        join(brainDir, 'learn/agentos/MemoryCore.md'),
        [
            '# Memory Core',
            'See [Services](../../ai/services.mjs#L12) and [MCP Servers](../../ai/mcp/server), plus sibling [MCP Intro](./tooling/Introduction.md).',
            'Inline `[raw](../../ai/services.mjs)` and fenced code stay untouched:',
            '```md',
            '[Code Link](../../ai/services.mjs)',
            '```'
        ].join('\n') + '\n'
    );

    const manifestPath = join(brainDir, 'docs/public-manifest.json');
    const manifest     = JSON.parse(await readFile(manifestPath, 'utf-8'));
    manifest.excludedDirs    = ['learn/agentos/decisions', 'learn/agentos/measurements'];
    manifest.sourceLinkRoots = ['ai/'];
    await writeFile(manifestPath, JSON.stringify(manifest, null, 4));

    const pinnedSha = commitAll(brainDir, 'docs: add sourceLinkRoots links', '2026-06-15T12:00:00Z');
    spokeCheckouts[0].commit = pinnedSha;

    await materializeLearnSpokes({pristineLearnDir, neoDir, spokeCheckouts});

    const materialized = await readFile(join(neoDir, 'learn/agentos/MemoryCore.md'), 'utf-8');
    assert.match(materialized, new RegExp(`https://github\\.com/neomjs/neo-agent-brain/blob/${pinnedSha}/ai/services\\.mjs#L12`));
    assert.match(materialized, new RegExp(`https://github\\.com/neomjs/neo-agent-brain/tree/${pinnedSha}/ai/mcp/server`));
    assert.match(materialized, /\[MCP Intro\]\(\.\/tooling\/Introduction\.md\)/);
    assert.match(materialized, /`\[raw\]\(\.\.\/\.\.\/ai\/services\.mjs\)`/);
    assert.match(materialized, /\[Code Link\]\(\.\.\/\.\.\/ai\/services\.mjs\)/);

    // Reject an admitted entry inside excludedDirs
    await mkdir(join(brainDir, 'learn/agentos/decisions'), {recursive: true});
    await writeFile(join(brainDir, 'learn/agentos/decisions/0001-test.md'), '# ADR\n');
    const badTree = JSON.parse(await readFile(join(brainDir, 'learn/tree.json'), 'utf-8'));
    badTree.data.push({name: 'ADR 1', parentId: 'AgentOS', id: 'agentos/decisions/0001-test'});
    await writeFile(join(brainDir, 'learn/tree.json'), JSON.stringify(badTree, null, 4));
    manifest.entries.push({file: 'learn/agentos/decisions/0001-test.md', route: '/learn/agentos/decisions/0001-test'});
    await writeFile(manifestPath, JSON.stringify(manifest, null, 4));
    spokeCheckouts[0].commit = commitAll(brainDir, 'docs: bad excluded entry', '2026-06-16T12:00:00Z');

    await assert.rejects(
        () => materializeLearnSpokes({pristineLearnDir, neoDir, spokeCheckouts}),
        /Excluded internal record/
    );
});
