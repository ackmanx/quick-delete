import './open-folder.less'
import React from 'react'
import {connect} from 'react-redux'
import Modal from './modal'
import PropTypes from 'prop-types'
import getFiles from '../../actions/get-files'
import updateSelectedFolder from '../../actions/update-selected-folder'

export class OpenFolder extends React.Component {

    static propTypes = {
        handleOpenFolder: PropTypes.func,
    }

    static defaultProps = {}

    constructor(props) {
        super(props)
        this.openFileDialog = this.openFileDialog.bind(this)
        this.onClickSubmit = this.onClickSubmit.bind(this)
    }

    render() {
        return (
            <div className='open-folder'>
                <Modal>
                    <h1>Select a folder to open</h1>
                    <div className='content'>
                        <button className='select-folder-button' onClick={this.openFileDialog}>Choose Folder</button>
                    </div>
                    <div className='button-container'>
                        <button className='primary-button' onClick={this.onClickSubmit}>Open</button>
                        {/* onclick will set modal in redux to false */}
                        <button className='secondary-button' onClick={() => {
                        }}>Cancel
                        </button>
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
        this.props.handleOpenFolder(this.state.selectedFolder[0])
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    handleOpenFolder: selectedFolder => {
        dispatch(updateSelectedFolder(selectedFolder))
        dispatch(getFiles())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(OpenFolder)
