import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

class ModalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: props.images || [],
            currentImageIndex: props.index
        };

        this.onMovePrevRequest = this.onMovePrevRequest.bind(this);
        this.onMoveNextRequest = this.onMoveNextRequest.bind(this);
    }

    onMovePrevRequest() {
        const {currentImageIndex, images} = this.state;

        this.setState({
            currentImageIndex: (currentImageIndex + images.length - 1) % images.length,
        })
    }

    onMoveNextRequest() {
        const {currentImageIndex, images} = this.state;

        this.setState({
            currentImageIndex: (currentImageIndex + 1) % images.length,
        })
    }

    render() {
    render(){
        const {images, currentImageIndex} = this.state;
        const {onClose, index} = this.props;

        return (
            <Lightbox
                mainSrc={images[currentImageIndex]}
                nextSrc={images[(currentImageIndex + 1) % images.length]}
                prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                onCloseRequest={onClose}
                onMovePrevRequest={this.onMovePrevRequest}
                onMoveNextRequest={this.onMoveNextRequest}
            />
        )
    }

}

export default ModalComponent;
