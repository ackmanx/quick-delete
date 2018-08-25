import './menu.less'
import React from 'react'
import menuIcon from '../resources/menu-icon.png'
import ConnectedConfirmDelete from './modals/confirm-delete'

export default class Menu extends React.Component {

    static propTypes = {}

    static defaultProps = {}

    state = {
        confirmDelete: false,
        openMenu: false,
    }

    constructor(props) {
        super(props)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
        this.toggleConfirmDelete = this.toggleConfirmDelete.bind(this)
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

                {confirmDelete && <ConnectedConfirmDelete onClose={this.toggleConfirmDelete}/>}

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

    toggleConfirmDelete() {
        this.setState({confirmDelete: !this.state.confirmDelete})
    }

    onClickOpenFolder(e) {
        e.stopPropagation()
        this.closeMenu()
    }

    onClickDeleteSelected(e) {
        e.stopPropagation()
        this.closeMenu()
        this.toggleConfirmDelete()
    }
}
