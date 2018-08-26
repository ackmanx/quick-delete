import {SET_FILES} from './action-types'
import {getBackendModule} from '../utils'

export default function getFiles() {
    return (dispatch, getState) => {
        const node_file = getBackendModule('./file')

        dispatch({
            type: SET_FILES,
            files: node_file.getImageFiles(getState().app.sourcePath)
        })
    }
}
