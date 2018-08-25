import './modal.less'
import React from 'react'

export default class Modal extends React.Component {

    static propTypes = {}

    static defaultProps = {}

    render() {
        return (
            <div className='modal'>
                <div className='box'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
