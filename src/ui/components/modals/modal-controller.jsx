import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ConnectedOpenFolder from './open-folder'

export class ModalController extends React.Component {

    static propTypes = {
        showOpenFolder: PropTypes.bool,
    }

    static defaultProps = {}

    constructor(props) {
        super(props)
    }

    render() {
        const {showOpenFolder} = this.props

        return (
            <div className='modal-controller'>
                {showOpenFolder && <ConnectedOpenFolder/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showOpenFolder: state.modals.showOpenFolder,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ModalController)
