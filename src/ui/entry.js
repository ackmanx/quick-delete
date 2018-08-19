import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import combinedReducers from './reducers'
import App from './components/app'
import './entry.less'
import setupKeyBindings from './keybindings'

const initialState = {
    app: {
        selectedFileIndex: 0,
        maxFileIndex: 0,
        listToDelete: [],
    },
    files: []
}

const store = createStore(
    combinedReducers,
    initialState,
    //Because middleware and devtools are both enhancers, we combine them into a single argument using redux's compose (like we do with combinedReducers)
    compose(
        applyMiddleware(thunk),
        //Putting this here enables redux devtools extension to work, as per their docs
        //Being this is an Electron app, you also need to install redux dev tools via the code (see node/entry.js)
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

setupKeyBindings(store)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
