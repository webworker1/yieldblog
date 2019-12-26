import React from 'react';

class ImageLink extends React.Component {
    constructor(props) {
        super(props);
        this.width = "540px"
        if (window.mobilecheck()) {
            this.width = "480px"
        }
    }
    
    newWindow() {
        window.open(this.props.src || this.props.href)
    }

    render() {
    let { widthOverride, src, href } = this.props;
    return (
        <div onClick={() => this.newWindow()}>
            <img style={{ "width": this.width || widthOverride }} src={src || href} /> <br />
        </div>)
    }
}


export default ImageLink;