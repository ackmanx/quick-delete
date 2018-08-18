import './app.less'
import React from 'react'
import {connect} from 'react-redux'
import * as ActionTypes from '../actions/action-types'
import {getFiles} from '../actions/get-files'
import {FullScreenImage} from './full-screen-image'
import {ActionBar} from './action-bar'

export class App extends React.Component {

    static defaultProps = {
        currentImage: {}
    }

    constructor(props) {
        super()
        props.setSourcePath('/Volumes/Storage/Dropbox/Code/quick-delete/src/test/images')
    }

    render() {
        const {currentImage, markToDelete} = this.props

        return (
            <div className='app'>
                <FullScreenImage image={currentImage}/>
                <ActionBar imagePath={currentImage.srcOriginal} markToDelete={markToDelete}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentImage: state.files[state.app.selectedFileIndex],
})

const mapDispatchToProps = dispatch => ({
    setSourcePath: sourcePath => {
        dispatch({type: ActionTypes.SET_SOURCE_PATH, sourcePath})
        dispatch(getFiles(sourcePath))
    },
    markToDelete: (imagePathToDelete) => dispatch({type: ActionTypes.MARK_TO_DELETE, imagePathToDelete}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
