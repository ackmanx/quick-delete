import {MARK_TO_DELETE} from './action-types'

export default function markDeleteAction() {
    return (dispatch, getState) => {
        const state = getState()
        const selectedFile = state.files[state.app.selectedFileIndex]

        dispatch({type: MARK_TO_DELETE, imagePathToDelete: selectedFile.srcOriginal})
    }
}
