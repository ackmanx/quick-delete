import './modal.less'
import React from 'react'

export default class Modal extends React.Component {

    static propTypes = {}

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
