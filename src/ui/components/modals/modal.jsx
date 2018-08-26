import './modal.less'
import React from 'react'
import PropTypes from 'prop-types'

export default class Modal extends React.Component {

    static propTypes = {
        children: PropTypes.object,
        onClose: PropTypes.func,
    }

    static defaultProps = {}

    constructor(props) {
        super(props)
        this.handleOverlayClick = this.handleOverlayClick.bind(this)
    }

    render() {
        return (
            <div className='modal modal-overlay' onClick={this.handleOverlayClick}>
                <div className='box'>
                    {this.props.children}
                </div>
            </div>
        )
    }

    handleOverlayClick(e) {
        if (e.target.classList.contains('modal-overlay')) {
            this.props.onClose()
        }
    }
}
