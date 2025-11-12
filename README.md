# How to update the gh-pages:

### Be careful to only push the required node_modules

1.  package.json: adjust the neo.mjs package version
2.  Delete the 4 symlinks inside step 12-15
3.  npm install
4.  github/pages/node_modules/neo.mjs/src/DefaultConfig.mjs => set isGitHubPages to true
5.  github/pages/node_modules/neo.mjs/src/worker/App.mjs => /* webpackExclude: /(?:\/|\\)(dist|node_modules)/(?!neo.mjs) */
6.  terminal: cd node_modules/neo.mjs/
7.  npm i
8.  npm run build-all
9. git add on the neo.mjs node_module
10. Terminal: Enter the top-level node_modules
11. ln -s ./neo.mjs/node_modules/@fortawesome
12. ln -s ./neo.mjs/node_modules/highlightjs-line-numbers.js
13. ln -s ./neo.mjs/node_modules/marked
14. ln -s ./neo.mjs/node_modules/monaco-editor
15. git push
