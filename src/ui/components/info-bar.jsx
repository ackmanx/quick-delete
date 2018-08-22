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
        this.onClickDeleteSelected = this.onClickDeleteSelected.bind(this)
    }

    render() {
        const {selectedFileIndex, totalFilesCount, image, handleStartDeletes} = this.props
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
                     onClick={() => this.setState({openMenu: !openMenu})}>
                    <img src={menuIcon}/>

                    {openMenu && (
                        <div className='menu'>
                            <ul>
                                <li onClick={(e) => e.stopPropagation()}>Open Folder</li>
                                <li onClick={this.onClickDeleteSelected}>Delete All Selected</li>
                            </ul>
                        </div>
                    )}
                </div>

                {openMenu && <div className='menu-overlay' onClick={() => this.setState({openMenu: false})}/>}
            </div>
        )
    }

    onClickDeleteSelected(e) {
        e.stopPropagation()
        this.props.handleStartDeletes()
    }
}
