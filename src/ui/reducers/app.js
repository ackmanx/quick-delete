import * as ActionType from '../actions/action-types'

export default function app(state = {}, action = {}) {

    switch (action.type) {
        case ActionType.SET_SOURCE_PATH:
            return {...state, sourcePath: action.sourcePath}

        case ActionType.SET_FILES:
            return {...state, maxFileIndex: action.files.length - 1}

        case ActionType.PREVIOUS_PHOTO:
        case ActionType.NEXT_PHOTO:
            let selectedFileIndex = state.selectedFileIndex

            if (action.type === ActionType.PREVIOUS_PHOTO && state.selectedFileIndex > 0) {
                selectedFileIndex = state.selectedFileIndex - 1
            }
            else if (action.type === ActionType.NEXT_PHOTO && state.selectedFileIndex < state.maxFileIndex) {
                selectedFileIndex = state.selectedFileIndex + 1
            }

            return {...state, selectedFileIndex}

    }

    return state
}
