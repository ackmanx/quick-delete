import './app.less'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import getFiles from '../actions/get-files'
import FullScreenImage from './full-screen-image'
import ConnectedActionBar from './action-bar'
import {MODAL_OPEN_FOLDER_OPEN, SET_SOURCE_PATH} from '../actions/action-types'
import ConnectedInfoBar from './info-bar'
import ConnectedModalController from './modals/modal-controller'

export class App extends React.Component {

    static propTypes = {
        currentImage: PropTypes.object,
        setSourcePath: PropTypes.func,
        showOpenFolderModal: PropTypes.func,
    }

    static defaultProps = {}

    constructor(props) {
        super(props)
        const node_storage = require('electron').remote.require('./storage')
        const sourcePath = node_storage.getSourcePath()

        if (sourcePath) {
            props.setSourcePath(sourcePath)
        }
        else {
            props.showOpenFolderModal()
        }
    }

    render() {
        const {currentImage} = this.props

        return (
            <div className='app'>
                <ConnectedModalController/>
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
    showOpenFolderModal: () => dispatch({type: MODAL_OPEN_FOLDER_OPEN}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
