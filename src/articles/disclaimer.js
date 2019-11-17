import React from 'react';

class Disclaimer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    This blog chronicles my search for new investments for my personal portfolio as a non-professional investor.
                    This blog will contain factual, analytical, and judgmental errors, and should not be construed as investment advice.
                    Letter grades assigned in this blog should not be considered investment advice, as it solely
                    reflects the opinions of its author.  The author disclaims any loss, or failure to realize a gain, incurred.
                    Lastly, the author may own securities he recommends.
                </div>)
    }
}

export default Disclaimer;