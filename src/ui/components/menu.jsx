import './menu.less'
import React from 'react'
import PropTypes from 'prop-types'
import menuIcon from '../resources/menu-icon.png'
import {ConfirmDelete} from './modals/confirm-delete'

export class Menu extends React.Component {

    static propTypes = {
        handleStartDeletes: PropTypes.func,
    }

    static defaultProps = {}

    state = {
        confirmDelete: false,
        openMenu: false,
    }

    constructor(props) {
        super(props)
        this.closeMenu = this.closeMenu.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.onClickOpenFolder = this.onClickOpenFolder.bind(this)
        this.onClickDeleteSelected = this.onClickDeleteSelected.bind(this)
    }

    render() {
        const {confirmDelete, openMenu} = this.state

        return (
            <div className='menu-container'>
                <div className={`button ${openMenu ? 'opened' : ''}`}
                     onClick={this.toggleMenu}>
                    <img src={menuIcon}/>

                    {openMenu && (
                        <div className='menu'>
                            <ul>
                                <li onClick={this.onClickOpenFolder}>Open Folder</li>
                                <li onClick={this.onClickDeleteSelected}>Delete All Selected</li>
                            </ul>
                        </div>
                    )}
                </div>

                {confirmDelete && <ConfirmDelete/>}

                {openMenu && <div className='overlay' onClick={this.closeMenu}/>}
            </div>
        )
    }

    toggleMenu() {
        this.setState({openMenu: !this.state.openMenu})
    }

    closeMenu() {
        this.setState({openMenu: false})
    }

    onClickOpenFolder(e) {
        e.stopPropagation()
        this.closeMenu()
    }

    onClickDeleteSelected(e) {
        e.stopPropagation()
        this.closeMenu()
        this.setState({confirmDelete: true})
        this.props.handleStartDeletes()
    }
}
