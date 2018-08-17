import mousetrap from 'mousetrap'
import {NEXT_PHOTO, PREVIOUS_PHOTO} from './actions/action-types'

export default function setupKeyBindings(store) {
    mousetrap.bind('left', () => store.dispatch({type: PREVIOUS_PHOTO}))
    mousetrap.bind('right', () => store.dispatch({type: NEXT_PHOTO}))
}
