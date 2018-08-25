import './full-screen-image.less'
import React from 'react'

export default class FullScreenImage extends React.Component {

    static defaultProps = {
        image: {}
    }

    render() {
        const {image} = this.props

        return (
            <div className='full-screen-image'>
                <img src={image.srcOriginal}/>
            </div>
        )
    }
}
