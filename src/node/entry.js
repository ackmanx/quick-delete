const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
const utils = require('./utils')

// Keep a global reference of the window object.
// If you don't, the window will be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        minWidth: 300,
        minHeight: 400,
    })

    mainWindow.maximize()

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../../dist/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', () => mainWindow = null)
}

// This method will be called when Electron has finished initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

if (utils.isDev()) {
    utils.createTestData()

    // In order to use redux devtools extension, we have to install it programmatically
    app.on('ready', () => {
        const {default: installExtension, REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS} = require('electron-devtools-installer')

        installExtension(REACT_DEVELOPER_TOOLS.id)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err))

        installExtension(REDUX_DEVTOOLS.id)
            .then((name) => console.log(`Added Extension:  ${name}`))
            .catch((err) => console.log('An error occurred: ', err))
    })
}
