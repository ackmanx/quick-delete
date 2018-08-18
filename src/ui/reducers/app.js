import * as Types from '../actions/action-types'

export default function app(state = {}, action = {}) {

    switch (action.type) {
        case Types.SET_SOURCE_PATH:
            return {...state, sourcePath: action.sourcePath}

        case Types.SET_FILES:
            return {...state, maxFileIndex: action.files.length - 1}

        case Types.PREVIOUS_PHOTO:
        case Types.NEXT_PHOTO:
            let selectedFileIndex = state.selectedFileIndex

            if (action.type === Types.PREVIOUS_PHOTO && state.selectedFileIndex > 0) {
                selectedFileIndex = state.selectedFileIndex - 1
            }
            else if (action.type === Types.NEXT_PHOTO && state.selectedFileIndex < state.maxFileIndex) {
                selectedFileIndex = state.selectedFileIndex + 1
            }

            return {...state, selectedFileIndex}

        case Types.MARK_TO_DELETE:
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
