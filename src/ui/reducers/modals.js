import {MODAL_OPEN_FOLDER_CLOSE, MODAL_OPEN_FOLDER_OPEN} from '../actions/action-types'

export default function modals(state = {}, action = {}) {

    switch (action.type) {
        case MODAL_OPEN_FOLDER_OPEN:
            return {...state, showOpenFolder: true}

        case MODAL_OPEN_FOLDER_CLOSE:
            return {...state, showOpenFolder: false}
    }

    return state
}
