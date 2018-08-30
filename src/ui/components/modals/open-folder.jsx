import './open-folder.less'
import React from 'react'
import {connect} from 'react-redux'
import Modal from './modal'
import PropTypes from 'prop-types'
import getFiles from '../../actions/get-files'
import updateSelectedFolder from '../../actions/update-selected-folder'
import {MODAL_OPEN_FOLDER_CLOSE} from '../../actions/action-types'

export class OpenFolder extends React.Component {

    static propTypes = {
        closeModal: PropTypes.func,
        handleOpenFolder: PropTypes.func,
        selectedFolder: PropTypes.string,
    }

    static defaultProps = {}

    state = {
        selectedFolder: ''
    }

    constructor(props) {
        super(props)
        this.openFileDialog = this.openFileDialog.bind(this)
        this.onClickSubmit = this.onClickSubmit.bind(this)
    }

    render() {
        const {closeModal, selectedFolder} = this.props

        return (
            <div className='open-folder'>
                <Modal onClose={closeModal}>
                    <h1>Select a folder to open</h1>
                    <div className='body-container'>
                        <button className='select-folder-button' onClick={this.openFileDialog}>Choose Folder</button>
                        <div className='selected-folder-path'>
                            {this.state.selectedFolder || selectedFolder}
                        </div>
                    </div>
                    <div className='button-container'>
                        <button className='primary-button' onClick={this.onClickSubmit}>Open</button>
                        <button className='secondary-button' onClick={closeModal}>Cancel</button>
                    </div>
                </Modal>
            </div>
        )
    }

    openFileDialog() {
        const dialog = require('electron').remote.dialog
        this.setState({selectedFolder: dialog.showOpenDialog({properties: ['openDirectory']})})
    }

    onClickSubmit() {
        const selectedFolderFromState = this.state.selectedFolder[0]
        const currentlyOpenedFolder = this.props.selectedFolder

        //Don't do anything if the user tries to open a folder but doesn't say which folder
        if (!selectedFolderFromState && !currentlyOpenedFolder) {
            return
        }

        this.props.closeModal()
        //If user just selected a folder, use that. Otherwise, use the currently opened folder
        this.props.handleOpenFolder(selectedFolderFromState || currentlyOpenedFolder)
    }
}

const mapStateToProps = state => ({
    selectedFolder: state.app.sourcePath
})

const mapDispatchToProps = dispatch => ({
    handleOpenFolder: selectedFolder => {
        dispatch(updateSelectedFolder(selectedFolder))
        dispatch(getFiles())
    },
    closeModal: () => dispatch({type: MODAL_OPEN_FOLDER_CLOSE}),
})

export default connect(mapStateToProps, mapDispatchToProps)(OpenFolder)
