import './app.less'
import React from 'react'
import {connect} from 'react-redux'
import * as ActionTypes from '../actions/action-types'
import {getFiles} from '../actions/get-files'
import {FullScreenImage} from './full-screen-image'

export class App extends React.Component {

    constructor(props) {
        super()
        props.setSourcePath('/Volumes/Storage/Dropbox/Code/quick-delete/src/test/images')
    }

    render() {
        const {files, selectedFileIndex} = this.props

        return (
            <div className='app'>
                <FullScreenImage image={files[selectedFileIndex]}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    files: state.files,
    selectedFileIndex: state.app.selectedFileIndex,
})

const mapDispatchToProps = dispatch => ({
    setSourcePath: sourcePath => {
        dispatch({type: ActionTypes.SET_SOURCE_PATH, sourcePath})
        dispatch(getFiles(sourcePath))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
