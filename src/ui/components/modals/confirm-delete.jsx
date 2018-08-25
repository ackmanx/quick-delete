import './confirm-delete.less'
import React from 'react'
import {connect} from 'react-redux'
import Modal from './modal'
import PropTypes from 'prop-types'
import startDeletesAction from '../../actions/start-deletes'
import getFiles from '../../actions/get-files'

export class ConfirmDelete extends React.Component {

    static propTypes = {
        listToDelete: PropTypes.array,
        handleStartDeletes: PropTypes.func,
    }

    static defaultProps = {}

    constructor(props) {
        super(props)
        this.onClickButtonYes = this.onClickButtonYes.bind(this)
    }

    render() {
        const {listToDelete} = this.props

        return (
            <div className='confirm-delete'>
                <Modal onClose={this.props.onClose}>
                    <h1>Are you sure you want to delete these photos?</h1>
                    <ul>
                        {listToDelete.map(photoPath => <li key={photoPath}>{photoPath}</li>)}
                    </ul>
                    <div className='button-container'>
                        <button className='primary-button' onClick={this.onClickButtonYes}>Yep!</button>
                        <button className='secondary-button' onClick={this.props.onClose}>Nope</button>
                    </div>
                </Modal>
            </div>
        )
    }

    onClickButtonYes() {
        this.props.onClose()
        this.props.handleStartDeletes(this.props.sourcePath)
    }
}

const mapStateToProps = state => ({
    listToDelete: state.app.listToDelete,
    sourcePath: state.app.sourcePath,
})

const mapDispatchToProps = dispatch => ({
    handleStartDeletes: (sourcePath) => {
        dispatch(startDeletesAction())
        dispatch(getFiles(sourcePath))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDelete)
