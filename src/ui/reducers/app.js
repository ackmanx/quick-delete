import * as ActionType from '../actions/action-types'

export default function app(state = {}, action = {}) {

    switch (action.type) {
        case ActionType.SET_SOURCE_PATH:
            return {...state, sourcePath: action.sourcePath}
    }

    return state
}
