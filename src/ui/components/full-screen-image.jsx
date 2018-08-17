import './full-screen-image.less'
import React from 'react'

export class FullScreenImage extends React.Component {

    static defaultProps = {
        image: {}
    }

    render() {
        const {image} = this.props
        const style = this.calculateDisplayedImageDimensions(image)

        return (
            <div className='full-screen-image'>
                <img style={style} src={image.srcOriginal}/>
            </div>
        )
    }

    calculateDisplayedImageDimensions(image) {
        let displayedImageWidth
        let displayedImageHeight

        //Landscape
        if (image.width > image.height) {
            if (image.width > window.innerWidth) {
                displayedImageWidth = '100vw'
            }
        }
        //Portrait
        else {
            if (image.height > window.innerHeight) {
                displayedImageHeight = '100vh'
            }
        }

        return {
            width: displayedImageWidth,
            height: displayedImageHeight,
        }
    }
}
