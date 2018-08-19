import mousetrap from 'mousetrap'
import {NEXT_PHOTO, PREVIOUS_PHOTO} from './actions/action-types'
import markDeleteAction from './actions/mark-delete'

export default function setupKeyBindings(store) {
    mousetrap.bind('left', () => store.dispatch({type: PREVIOUS_PHOTO}))
    mousetrap.bind('right', () => store.dispatch({type: NEXT_PHOTO}))
    mousetrap.bind('space', () => store.dispatch(markDeleteAction()))
}
