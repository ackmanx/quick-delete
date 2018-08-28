import './info-bar.less'
import React from 'react'
import PropTypes from 'prop-types'
import Menu from './menu'
import connect from 'react-redux/es/connect/connect'

export class InfoBar extends React.Component {

    static propTypes = {
        selectedFileIndex: PropTypes.number,
        totalFilesCount: PropTypes.number,
        image: PropTypes.object,
        folderHasFiles: PropTypes.bool,
        listToDelete: PropTypes.array,
    }

    static defaultProps = {
        image: {}
    }

    render() {
        const {selectedFileIndex, listToDelete, folderHasFiles, totalFilesCount, image} = this.props

        return (
            <div className='info-bar'>
                <div className='count'>
                    {folderHasFiles && <div>{selectedFileIndex + 1} of {totalFilesCount}</div>}
                </div>
                <div className='path'>
                    {image.srcOriginal}
                </div>
                <Menu listToDelete={listToDelete}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedFileIndex: state.app.selectedFileIndex,
    totalFilesCount: state.files.length,
    image: state.files[state.app.selectedFileIndex],
    listToDelete: state.app.listToDelete,
    folderHasFiles: state.app.folderHasFiles,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar)
