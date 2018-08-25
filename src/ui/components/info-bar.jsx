import './info-bar.less'
import React from 'react'
import PropTypes from 'prop-types'
import Menu from './menu'

export default class InfoBar extends React.Component {

    static propTypes = {
        selectedFileIndex: PropTypes.number,
        totalFilesCount: PropTypes.number,
        image: PropTypes.object,
        listToDelete: PropTypes.array,
    }

    static defaultProps = {}

    render() {
        const {selectedFileIndex, listToDelete, totalFilesCount, image} = this.props

        return (
            <div className='info-bar'>
                <div className='count'>
                    {selectedFileIndex + 1} of {totalFilesCount}
                </div>
                <div className='path'>
                    {image.srcOriginal}
                </div>
                <Menu listToDelete={listToDelete}/>
            </div>
        )
    }
}
