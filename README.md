# How to update the gh-pages:

### Be careful to only push the required node_modules

1. package.json: adjust the neo.mjs package version
2. npm install
3. github/pages/node_modules/neo.mjs/src/Neo.mjs => set useGoogleAnalytics to true
4. terminal: cd node_modules/neo.mjs/
5. npm run build-all
6. git add on the neo.mjs node_module
7. ensure to NOT push the node_modules inside the neo.mjs node_module. except (if the version changed):
    1. @ fortawesome
    2. highlightjs-line-numbers.js
    3. siesta-lite (ONLY siesta-all.js & resources/*)
8. git push