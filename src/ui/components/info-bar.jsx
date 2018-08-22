import './info-bar.less'
import React from 'react'
import PropTypes from 'prop-types'
import menuIcon from '../resources/menu-icon.png'

export class InfoBar extends React.Component {

    static propTypes = {
        selectedFileIndex: PropTypes.number,
        totalFilesCount: PropTypes.number,
        image: PropTypes.object,
        handleStartDeletes: PropTypes.func,
    }

    static defaultProps = {}

    state = {
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
        const {selectedFileIndex, totalFilesCount, image} = this.props
        const openMenu = this.state.openMenu

        return (
            <div className='info-bar'>
                <div className='count'>
                    {selectedFileIndex + 1} of {totalFilesCount}
                </div>
                <div className='path'>
                    {image.srcOriginal}
                </div>
                <div className={`menu-button ${openMenu ? 'opened' : ''}`}
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

                {openMenu && <div className='menu-overlay' onClick={this.closeMenu}/>}
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
        this.props.handleStartDeletes()
    }
}
