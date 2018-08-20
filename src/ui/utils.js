/*
 * When `remote.require('./module')` is called with a relative path (like in this example), the path is relative to the entrypoint of the main process
 * This app's main process entry point is `node/entry.js`, so modules required with remote are relative to that
 *
 * https://electronjs.org/docs/api/remote
 */
exports.getBackendModule = modulePath => require('electron').remote.require(modulePath)
