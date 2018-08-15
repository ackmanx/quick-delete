import * as ActionTypes from './action-types'

export const getFiles = sourcePath => {
    //This imports the specified node module, so you can interact with the "backend" from here
    const file = require('electron').remote.require('./file')

    return {
        type: ActionTypes.SET_FILES,
        files: file.getImageFiles(sourcePath)
    }

}
