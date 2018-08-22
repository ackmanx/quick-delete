import './info-bar.less'
import React from 'react'
import PropTypes from 'prop-types'
import {Menu} from './menu'

export class InfoBar extends React.Component {

    static propTypes = {
        selectedFileIndex: PropTypes.number,
        totalFilesCount: PropTypes.number,
        image: PropTypes.object,
        handleStartDeletes: PropTypes.func,
    }

    static defaultProps = {}

    render() {
        const {selectedFileIndex, totalFilesCount, image, handleStartDeletes} = this.props

        return (
            <div className='info-bar'>
                <div className='count'>
                    {selectedFileIndex + 1} of {totalFilesCount}
                </div>
                <div className='path'>
                    {image.srcOriginal}
                </div>
                <Menu handleStartDeletes={handleStartDeletes}/>
            </div>
        )
    }
}
