import {SET_SOURCE_PATH} from './action-types'

export default function updateSelectedFolder(selectedFolder) {
    return (dispatch, getState) => {
        const node_storage = require('electron').remote.require('./storage.js')
        node_storage.saveSourcePath(selectedFolder)

        dispatch({type: SET_SOURCE_PATH, sourcePath: selectedFolder})
    }
}
