import React from 'react';

const imgLink = ({src, href, widthOverride}) => {
    let width = "540px"
    if (window.mobilecheck()) {
        width = "480px"
    }
    return (
        <div>
            <img style={{width: widthOverride || width }} src={src || href} /> <br/>
        </div>)
}

export default imgLink;