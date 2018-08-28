const ElectronStore = require('electron-store')
const store = new ElectronStore()

exports.getSourcePath = () => store.get('sourcePath')

exports.saveSourcePath = sourcePath => store.set('sourcePath', sourcePath)
