/* global Package:false, Npm:false */

Package.describe({
  name: 'quark:electron',
  summary: "Electron",
  version: "0.1.3",
  git: "https://github.com/rissem/meteor-electron"
});

Npm.depends({
  "electron-packager": "5.0.2",
  "is-running": "1.0.5",
  "mkdirp": "0.5.1",
  "serve-static": "1.1.0"
});

Package.on_use(function (api) {
  api.use(["mongo-livedata", "webapp", "ejson"], "server");
  api.use("underscore", ["server", "client"]);
  api.use(["iron:router"], {weak: true});

  api.addFiles([
    'server/createBinaries.js',
    'server/launchApp.js',
    'server/platformSpecificSetting.js',
    'server/serve.js',
    'server/serveBuild.js',
    // Must go last so that its dependencies have been defined.
    'server/index.js'
  ], 'server');

  // When adding new files, also edit `server.js` to write these files into the app directory.
  api.addAssets([
    "app/package.json",
    "app/main.js",
    "app/menu.js",
    "app/proxyWindowEvents.js",
    "app/preload.js"
  ], "server");

  api.addFiles(['client/index.js'], "client");

  api.export("Electron", ["client"]);
});
