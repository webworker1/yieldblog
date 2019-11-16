import React from 'react';

const newLink = (props) => {
    return <a target="_blank" href={props.href}>{props.children}</a>
}

export default newLink;