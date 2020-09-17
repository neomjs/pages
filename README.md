# How to update the gh-pages:

### Be careful to only push the required node_modules

1. package.json: adjust the neo.mjs package version
2. npm install
3. github/pages/node_modules/neo.mjs/src/DefaultConfig.mjs => set isGitHubPages to true
4. github/pages/node_modules/neo.mjs/src/DefaultConfig.mjs => set useGoogleAnalytics to true
5. github/pages/node_modules/neo.mjs/src/worker/App.mjs => /* webpackExclude: /\/node_modules/(?!neo.mjs) */
6. terminal: cd node_modules/neo.mjs/
7. npm run build-all
8. git add on the neo.mjs node_module
9. ensure to NOT push the node_modules inside the neo.mjs node_module. except (if the version changed):
    1. @ fortawesome
    2. highlightjs-line-numbers.js
    3. siesta-lite (ONLY siesta-all.js & resources/*)
10. add the new version into the index.html
11. git push