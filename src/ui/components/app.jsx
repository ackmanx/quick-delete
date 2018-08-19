import './app.less'
import React from 'react'
import {connect} from 'react-redux'
import {getFiles} from '../actions/get-files'
import {FullScreenImage} from './full-screen-image'
import {ActionBar} from './action-bar'
import {MARK_TO_DELETE, SET_SOURCE_PATH} from '../actions/action-types'
import markDeleteAction from '../actions/mark-delete'

export class App extends React.Component {

    static defaultProps = {
        currentImage: {},
        listToDelete: [],
    }

    constructor(props) {
        super()
        props.setSourcePath('/Volumes/Storage/Dropbox/Code/quick-delete/src/test/images')
    }

    render() {
        const {currentImage, handleMarkDelete, listToDelete} = this.props

        const markedForDelete = listToDelete.includes(currentImage.srcOriginal)

        return (
            <div className='app'>
                <FullScreenImage image={currentImage}/>
                <ActionBar imagePath={currentImage.srcOriginal}
                           markedForDelete={markedForDelete}
                           handleMarkDelete={handleMarkDelete}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
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
