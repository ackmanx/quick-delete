import {MARK_TO_DELETE, NEXT_PHOTO, PREVIOUS_PHOTO, SET_FILES, SET_SOURCE_PATH} from '../actions/action-types'

export default function app(state = {}, action = {}) {

    switch (action.type) {
        case SET_SOURCE_PATH:
            document.title = `Quick Delete - ${action.sourcePath}`
            return {...state, sourcePath: action.sourcePath}

        case SET_FILES:
            return {...state, maxFileIndex: action.files.length - 1}

        case PREVIOUS_PHOTO:
        case NEXT_PHOTO:
            let selectedFileIndex = state.selectedFileIndex

            if (action.type === PREVIOUS_PHOTO && state.selectedFileIndex > 0) {
                selectedFileIndex = state.selectedFileIndex - 1
            }
            else if (action.type === NEXT_PHOTO && state.selectedFileIndex < state.maxFileIndex) {
                selectedFileIndex = state.selectedFileIndex + 1
            }

            return {...state, selectedFileIndex}

        case MARK_TO_DELETE:
            const listToDelete = state.listToDelete.slice()

            if (listToDelete.includes(action.imagePathToDelete)) {
                listToDelete.splice(listToDelete.indexOf(action.imagePathToDelete), 1)
            }
            else {
                listToDelete.push(action.imagePathToDelete)
            }

            return {...state, listToDelete}
    }

    return state
}
