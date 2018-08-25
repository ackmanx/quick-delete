import './app.less'
import React from 'react'
import {connect} from 'react-redux'
import {getFiles} from '../actions/get-files'
import {FullScreenImage} from './full-screen-image'
import {ActionBar} from './action-bar'
import {SET_SOURCE_PATH} from '../actions/action-types'
import markDeleteAction from '../actions/mark-delete'
import {InfoBar} from './info-bar'

export class App extends React.Component {

    static defaultProps = {
        currentImage: {},
        listToDelete: [],
    }

    constructor(props) {
        super()
        const utils = require('electron').remote.require('./utils')
        props.setSourcePath(utils.getTestDataDirectory())
    }

    render() {
        const {currentImage, listToDelete, selectedFileIndex, totalFilesCount, handleMarkDelete} = this.props

        const markedForDelete = listToDelete.includes(currentImage.srcOriginal)

        return (
            <div className='app'>
                <InfoBar selectedFileIndex={selectedFileIndex}
                         image={currentImage}
                         totalFilesCount={totalFilesCount}/>
                <FullScreenImage image={currentImage}/>
                <ActionBar imagePath={currentImage.srcOriginal}
                           markedForDelete={markedForDelete}
                           handleMarkDelete={handleMarkDelete}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedFileIndex: state.app.selectedFileIndex,
    totalFilesCount: state.files.length,
    currentImage: state.files[state.app.selectedFileIndex],
    listToDelete: state.app.listToDelete,
})

const mapDispatchToProps = dispatch => ({
    setSourcePath: sourcePath => {
        dispatch({type: SET_SOURCE_PATH, sourcePath})
        dispatch(getFiles(sourcePath))
    },
    handleMarkDelete: () => dispatch(markDeleteAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
