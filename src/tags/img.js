import React from 'react';

const imgLink = ({src}) => {
    let width = "540px"
    if (window.mobilecheck()) {
        width = "480px"
    }
    return (
        <div>
            <img style={{width: width}} src={src} /> <br/>
        </div>)
}

export default imgLink;