import {getBackendModule} from '../utils'
import {GLOBAL_SPINNER_START, GLOBAL_SPINNER_STOP, RESET_SELECTED_FILE_INDEX} from './action-types'

export default function startDeletesAction() {
    return (dispatch, getState) => {
        const state = getState()

        dispatch({type: GLOBAL_SPINNER_START})

        const node_file = getBackendModule('./file')
        node_file.startDeletes(state.app.listToDelete)

        dispatch({type: GLOBAL_SPINNER_STOP})
        dispatch({type: RESET_SELECTED_FILE_INDEX})
    }
}
