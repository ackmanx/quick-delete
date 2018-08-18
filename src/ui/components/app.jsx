import './app.less'
import React from 'react'
import {connect} from 'react-redux'
import * as ActionTypes from '../actions/action-types'
import {getFiles} from '../actions/get-files'
import {FullScreenImage} from './full-screen-image'
import {ActionBar} from './action-bar'

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
        dispatch({type: ActionTypes.SET_SOURCE_PATH, sourcePath})
        dispatch(getFiles(sourcePath))
    },
    handleMarkDelete: (imagePathToDelete) => dispatch({type: ActionTypes.MARK_TO_DELETE, imagePathToDelete}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
