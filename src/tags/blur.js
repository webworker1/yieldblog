import React from 'react';

const blur = (props) => {
    return <div className='blurred'>
        {props.children}
    </div>
}

export default blur;