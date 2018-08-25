import './menu.less'
import React from 'react'
import PropTypes from 'prop-types'
import menuIcon from '../resources/menu-icon.png'
import ConnectedConfirmDelete from './modals/confirm-delete'

export default class Menu extends React.Component {

    static propTypes = {
        listToDelete: PropTypes.array,
    }

    static defaultProps = {
        listToDelete: []
    }

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
        const {listToDelete} = this.props
        const {confirmDelete, openMenu} = this.state

        const deleteDisabled = listToDelete.length === 0

        return (
            <div className='menu-container'>
                <div className={`button ${openMenu ? 'opened' : ''}`}
                     onClick={this.toggleMenu}>
                    <img src={menuIcon}/>

                    {openMenu && (
                        <div className='menu'>
                            <ul>
                                <li onClick={this.onClickOpenFolder}>Open Folder</li>
                                <li className={deleteDisabled ? 'disabled' : ''} onClick={(e) => this.onClickDeleteSelected(e, deleteDisabled)}>
                                    Delete All Selected
                                </li>
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

    onClickDeleteSelected(e, deleteDisabled) {
        e.stopPropagation()

        if (!deleteDisabled) {
            this.closeMenu()
            this.toggleConfirmDelete()
        }
    }
}
