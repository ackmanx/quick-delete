import * as ActionTypes from '../actions/action-types'

export default function files(state = [], action = {}) {

    switch (action.type) {
        case ActionTypes.SET_FILES:
            return action.files
    }

    return state
}
