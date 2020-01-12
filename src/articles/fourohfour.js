import React from 'react';
import Image from '../tags/img';

class FourOhFour extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="fourohfour-wrapper">
                    <h2> 404 </h2>
                    <Image widthOverride="500px" href="http://www.remylikesmusic.com/uploads/4/7/8/2/47823793/shocked-monopoly-man-t_orig.jpg" />
                    <p> Sometimes it do be like that.  But don't worry, here's the main page</p>
                </div>)
    }
}

export default FourOhFour;