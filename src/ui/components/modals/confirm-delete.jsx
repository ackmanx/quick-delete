import './confirm-delete.less'
import React from 'react'
import {connect} from 'react-redux'
import Modal from './modal'
import PropTypes from 'prop-types'
import startDeletesAction from '../../actions/start-deletes'

export class ConfirmDelete extends React.Component {

    static propTypes = {
        listToDelete: PropTypes.array,
    }

    static defaultProps = {}

    render() {
        const {listToDelete} = this.props

        return (
            <div className='confirm-delete'>
                <Modal>
                    <h1>Are you sure you want to delete these photos?</h1>
                    <ul>
                        {listToDelete.map(photoPath => <li key={photoPath}>{photoPath}</li>)}
                    </ul>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listToDelete: state.app.listToDelete,
})

const mapDispatchToProps = dispatch => ({
    handleStartDeletes: () => dispatch(startDeletesAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDelete)
