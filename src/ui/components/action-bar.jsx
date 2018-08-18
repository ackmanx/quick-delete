import './action-bar.less'
import React from 'react'
import deleteIcon from '../resources/delete-icon.png'

export class ActionBar extends React.Component {

    static defaultProps = {
    }

    render() {
        const {imagePath, markToDelete} = this.props

        return (
            <div className='action-bar' onClick={() => markToDelete(imagePath)}>
                <img src={deleteIcon}/>
            </div>
        )
    }
}
