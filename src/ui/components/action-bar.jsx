import './action-bar.less'
import React from 'react'
import deleteIcon from '../resources/delete-icon.png'

export class ActionBar extends React.Component {

    static defaultProps = {}

    render() {
        const {imagePath, markedForDelete, handleMarkDelete} = this.props

        return (
            <div className='action-bar'>
                <div className='choose-folder'>
                    <img src={deleteIcon}/>
                </div>
                <div className={`mark-for-delete ${markedForDelete ? 'mark-for-delete--marked' : ''}`}
                     onClick={() => handleMarkDelete(imagePath)}>
                    <img src={deleteIcon}/>
                </div>
                <div className='apply-deletes'>
                    <img src={deleteIcon}/>
                </div>
            </div>
        )
    }
}
