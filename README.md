# How to update the gh-pages:

### Be careful to only push the required node_modules

1.  Delete the node_modules folder 
2.  package.json: adjust the neo.mjs package version
3.  npm install
4.  github/pages/node_modules/neo.mjs/src/DefaultConfig.mjs => set isGitHubPages to true
5.  github/pages/node_modules/neo.mjs/src/DefaultConfig.mjs => set useGoogleAnalytics to true
6.  github/pages/node_modules/neo.mjs/src/worker/App.mjs => /* webpackExclude: /[\\\/]node_modules/(?!neo.mjs) */
7.  terminal: cd node_modules/neo.mjs/
8.  npm i
9.  npm run build-all
10. git add on the neo.mjs node_module
11. Terminal: Enter the top-level node_modules
12. ln -s ./neo.mjs/node_modules/@fortawesome
12. ln -s ./neo.mjs/node_modules/highlightjs-line-numbers.js
13. ln -s ./neo.mjs/node_modules/marked
14. ln -s ./neo.mjs/node_modules/monaco-editor
15. git push
