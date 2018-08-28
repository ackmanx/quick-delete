import './action-bar.less'
import React from 'react'
import PropTypes from 'prop-types'
import checkmarkIcon from '../resources/checkmark-icon.png'
import markDeleteAction from '../actions/mark-delete'
import connect from 'react-redux/es/connect/connect'

export class ActionBar extends React.Component {

    static propTypes = {
        currentImage: PropTypes.object,
        listToDelete: PropTypes.array,
        folderHasFiles: PropTypes.bool,
        handleMarkDelete: PropTypes.func,
    }

    static defaultProps = {
        currentImage: {},
    }

    render() {
        const {currentImage, listToDelete, folderHasFiles, handleMarkDelete} = this.props

        if (!folderHasFiles) {
            return null
        }

        const markedForDelete = listToDelete.includes(currentImage.srcOriginal)

        return (
            <div className='action-bar'>
                <div className='unused-button'/>
                <div className={`mark-for-delete ${markedForDelete ? 'mark-for-delete--marked' : ''}`}
                     onClick={() => handleMarkDelete(currentImage.srcOriginal)}>
                    <img src={checkmarkIcon}/>
                </div>
                <div className='unused-button'/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentImage: state.files[state.app.selectedFileIndex],
    listToDelete: state.app.listToDelete,
    folderHasFiles: state.app.folderHasFiles,
})

const mapDispatchToProps = dispatch => ({
    handleMarkDelete: () => dispatch(markDeleteAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar)
