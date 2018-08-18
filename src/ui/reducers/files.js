import {SET_FILES} from '../actions/action-types'

export default function files(state = [], action = {}) {

    switch (action.type) {
        case SET_FILES:
            return action.files
    }

    return state
}
