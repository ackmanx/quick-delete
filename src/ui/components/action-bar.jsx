import './action-bar.less'
import React from 'react'
import deleteIcon from '../resources/delete-icon.png'

export class ActionBar extends React.Component {

    static defaultProps = {
    }

    render() {
        return (
            <div className='action-bar'>
                <img src={deleteIcon}/>
            </div>
        )
    }
}
