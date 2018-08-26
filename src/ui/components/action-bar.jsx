import './action-bar.less'
import React from 'react'
import PropTypes from 'prop-types'
import checkmarkIcon from '../resources/checkmark-icon.png'

export default class ActionBar extends React.Component {

    static propTypes = {
        imagePath: PropTypes.string,
        markedForDelete: PropTypes.bool,
        handleMarkDelete: PropTypes.func,
    }

    static defaultProps = {}

    render() {
        const {imagePath, markedForDelete, handleMarkDelete} = this.props

        return (
            <div className='action-bar'>
                <div className='unused-button'/>
                <div className={`mark-for-delete ${markedForDelete ? 'mark-for-delete--marked' : ''}`}
                     onClick={() => handleMarkDelete(imagePath)}>
                    <img src={checkmarkIcon}/>
                </div>
                <div className='unused-button'/>
            </div>
        )
    }
}
