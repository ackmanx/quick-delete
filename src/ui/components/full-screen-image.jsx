import './full-screen-image.less'
import React from 'react'

export class FullScreenImage extends React.Component {

    static defaultProps = {
        image: {}
    }

    render() {
        const {image} = this.props
        let displayedImageWidth
        let displayedImageHeight

        const style = {
            width: displayedImageWidth ? displayedImageWidth : undefined,
            height: displayedImageHeight ? displayedImageHeight : undefined,
        }

        return (
            <div className='full-screen-image'>
                <img style={style} src={image.srcOriginal}/>
            </div>
        )
    }
}
