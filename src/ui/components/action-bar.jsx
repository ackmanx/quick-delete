import './action-bar.less'
import React from 'react'
import folderIcon from '../resources/folder-icon.png'
import checkmarkIcon from '../resources/checkmark-icon.png'
import trashIcon from '../resources/trash-icon.png'

export class ActionBar extends React.Component {

    static defaultProps = {}

    render() {
        const {imagePath, markedForDelete, handleMarkDelete, handleStartDeletes} = this.props

        return (
            <div className='action-bar'>
                <div className='choose-folder'>
                    {/* todo: move this to menu */}
                    {/*<img src={folderIcon}/>*/}
                </div>
                <div className={`mark-for-delete ${markedForDelete ? 'mark-for-delete--marked' : ''}`}
                     onClick={() => handleMarkDelete(imagePath)}>
                    <img src={checkmarkIcon}/>
                </div>
                <div className='apply-deletes'
                    onClick={handleStartDeletes}>
                    {/* todo: move this to menu */}
                    {/*<img src={trashIcon}/>*/}
                </div>
            </div>
        )
    }
}
