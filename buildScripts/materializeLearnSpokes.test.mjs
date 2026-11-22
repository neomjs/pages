import assert                              from 'node:assert/strict';
import {existsSync, mkdtempSync, statSync} from 'node:fs';
import {mkdir, readFile, rm, writeFile}    from 'node:fs/promises';
import os                                  from 'node:os';
import {join, resolve}                     from 'node:path';
import test                                from 'node:test';

import {
    fetchAndMaterializeLearnSpokes,
    materializeLearnSpokes,
    validateLearnSpokePins
} from './materializeLearnSpokes.mjs';

/**
 * @summary Builds a synthetic multi-spoke + hub fixture in `os.tmpdir()` to test tree composition, prefixing,
 * timestamp preservation, and fail-closed collision checks without network calls.
 * @param {Object} [overrides={}]
 * @returns {Promise<{root: String, neoDir: String, baseTree: Object, spokeCheckouts: Object[]}>}
 */
async function createSyntheticWorkspace({
    collidingHubRoute   = false,
    collidingSpokeRoute = false,
    missingSpokeFile    = false
} = {}) {
    const
        root       = mkdtempSync(join(os.tmpdir(), 'pages-learn-spokes-')),
        neoDir     = join(root, 'node_modules/neo.mjs'),
        brainDir   = join(root, 'spokes/brain'),
        instDir    = join(root, 'spokes/institution'),
        devidxDir  = join(root, 'spokes/devindex');

    await mkdir(join(neoDir, 'learn/benefits/body'), {recursive: true});
    await mkdir(join(neoDir, 'apps/portal/resources/data'), {recursive: true});

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
            {name: 'Tutorials',                                     parentId: null,              isLeaf: false, id: 'Tutorials', collapsed: true}
        ]
    };

    // Brain spoke (multi-mount: Benefits + AgentInterfaces)
    await mkdir(join(brainDir, 'docs'), {recursive: true});
    await mkdir(join(brainDir, 'learn/benefits/brain'), {recursive: true});
    await mkdir(join(brainDir, 'learn/agentos/tooling'), {recursive: true});
    await mkdir(join(brainDir, 'learn/agentos/cloud-deployment'), {recursive: true});
    await writeFile(join(brainDir, 'learn/benefits/brain/AgentMemory.md'), '# Agent Memory\n');
    await writeFile(join(brainDir, 'learn/agentos/MemoryCore.md'), '# Memory Core\n');
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

    // Institution spoke (single-mount: AgentInterfaces -> "Agent Institution")
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

    // DevIndex spoke (single-mount: Guides -> guides -> "DevIndex App", with nested subfolder)
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
        spoke     : 'neomjs/devindex',
        treeFile : 'learn/tree.json',
        treeMount: {parentId: 'Guides', id: 'guides/devindex', name: 'DevIndex App'},
        entries  : [
            {file: 'learn/Introduction.md',        route: '/learn/guides/devindex/Introduction'},
            {file: 'learn/data-factory/Engine.md', route: '/learn/guides/devindex/data-factory/Engine'}
        ]
    }, null, 4));

    return {
        root,
        neoDir,
        baseTree,
        spokeCheckouts: [
            {spoke: 'neomjs/neo-agent-brain',       checkoutDir: brainDir,  commitEpoch: 1763596800}, // 2025-11-20
            {spoke: 'neomjs/neo-agent-institution', checkoutDir: instDir,   commitEpoch: 1763683200}, // 2025-11-21
            {spoke: 'neomjs/devindex',              checkoutDir: devidxDir, commitEpoch: 1763769600}  // 2025-11-22
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

test('materializeLearnSpokes composes #20498 hub hierarchy, rewrites spoke prefixes, and preserves commit timestamps', async t => {
    const {root, neoDir, baseTree, spokeCheckouts} = await createSyntheticWorkspace();
    t.after(() => rm(root, {recursive: true, force: true}));

    const result = await materializeLearnSpokes({baseTree, neoDir, spokeCheckouts});

    assert.equal(result.spokeLeafCount, 7);
    assert.equal(result.totalLeafCount, 12);

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
    assert.ok(ids.indexOf('guides/devindex') < ids.indexOf('Tutorials'));

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

    // 5. Filesystem mtime and seo.json lastmod match spoke commit timestamps
    const engineStat = statSync(join(neoDir, 'learn/guides/devindex/data-factory/Engine.md'));
    assert.equal(Math.floor(engineStat.mtimeMs / 1000), 1763769600);

    const seoJson = JSON.parse(await readFile(join(neoDir, 'apps/portal/resources/data/seo.json'), 'utf-8'));
    assert.equal(seoJson['/learn/benefits/brain/AgentMemory'].lastmod, '2025-11-20');
    assert.equal(seoJson['/learn/institution/Introduction'].lastmod, '2025-11-21');
    assert.equal(seoJson['/learn/guides/devindex/data-factory/Engine'].lastmod, '2025-11-22');
});

test('materializeLearnSpokes fails closed on hub/spoke route collisions, missing files, and cleans up temp clones on fetch error', async t => {
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

    const tempRoot     = join(hubCollision.root, 'temp_spokes_cleanup_check');
    const baseTreePath = join(hubCollision.root, 'base-tree.json');
    await writeFile(baseTreePath, JSON.stringify(hubCollision.baseTree));

    await assert.rejects(
        () => fetchAndMaterializeLearnSpokes({
            baseTreePath,
            contentPins: {
                learnSpokes: [{
                    spoke     : 'neomjs/devindex',
                    repository: 'https://github.com/neomjs/devindex.git',
                    commit    : '0000000000000000000000000000000000000000'
                }]
            },
            fetchRevision: (_url, _ref, dir) => {
                mkdtempSync; // no-op reference
                return 'deadbeef'
            },
            neoDir: hubCollision.neoDir,
            tempRoot
        }),
        /Failed to fetch neomjs\/devindex/
    );
    assert.equal(existsSync(tempRoot), false);
});
