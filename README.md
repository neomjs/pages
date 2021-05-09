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
9. git push
