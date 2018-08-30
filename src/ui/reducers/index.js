import {combineReducers} from 'redux'
import files from './files'
import app from './app'
import modals from './modals'

export default combineReducers({
    app,
    files,
    modals,
})
