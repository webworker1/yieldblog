import React from 'react';

const imgLink = ({src}) => {
    let width = "540px"
    if (window.mobilecheck()) {
        width = "400px"
    }
    return <img style={{width: width}} src={src} />
}

export default imgLink;