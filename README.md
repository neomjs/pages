# How to update the gh-pages:

### Be careful to only push the required node_modules

1. package.json: adjust the neo.mjs package version
2. npm install
3. github/pages/node_modules/neo.mjs/src/DefaultConfig.mjs => set isGitHubPages to true
4. github/pages/node_modules/neo.mjs/src/DefaultConfig.mjs => set useGoogleAnalytics to true
5. terminal: cd node_modules/neo.mjs/
6. npm run build-all
7. git add on the neo.mjs node_module
8. ensure to NOT push the node_modules inside the neo.mjs node_module. except (if the version changed):
    1. @ fortawesome
    2. highlightjs-line-numbers.js
    3. siesta-lite (ONLY siesta-all.js & resources/*)
9. add the new version into the index.html
10. git push