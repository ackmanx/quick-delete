import './modal.less'
import React from 'react'
import {Modal} from './modal'
// import PropTypes from 'prop-types'

export class ConfirmDelete extends React.Component {

    static propTypes = {}

    static defaultProps = {}

    render() {
        // const {} = this.props

        return (
            <div className='confirm-delete'>
                <Modal>
                    <h1>hellooooooooo nurse</h1>
                </Modal>
            </div>
        )
    }
}
