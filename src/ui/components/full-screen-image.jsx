import './full-screen-image.less'
import React from 'react'
import PropTypes from 'prop-types'

export default class FullScreenImage extends React.Component {

    static propTypes = {
        image: PropTypes.object,
    }

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
