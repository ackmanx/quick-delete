import {SET_FILES} from './action-types'
import {getBackendModule} from '../utils'

export const getFiles = sourcePath => {
    const node_file = getBackendModule('./file')

    return {
        type: SET_FILES,
        files: node_file.getImageFiles(sourcePath)
    }

}
