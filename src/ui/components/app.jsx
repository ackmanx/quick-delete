import './app.less'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import getFiles from '../actions/get-files'
import FullScreenImage from './full-screen-image'
import ConnectedActionBar from './action-bar'
import {SET_SOURCE_PATH} from '../actions/action-types'
import ConnectedInfoBar from './info-bar'

export class App extends React.Component {

    static propTypes = {
        currentImage: PropTypes.object,
        setSourcePath: PropTypes.func,
    }

    static defaultProps = {}

    constructor(props) {
        super()
        const utils = require('electron').remote.require('./utils')
        props.setSourcePath(utils.getTestDataDirectory())
    }

    render() {
        const {currentImage} = this.props

        return (
            <div className='app'>
                <ConnectedInfoBar/>
                <FullScreenImage image={currentImage}/>
                <ConnectedActionBar/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentImage: state.files[state.app.selectedFileIndex],
})

const mapDispatchToProps = dispatch => ({
    setSourcePath: sourcePath => {
        dispatch({type: SET_SOURCE_PATH, sourcePath})
        dispatch(getFiles())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
