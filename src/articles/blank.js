import React from 'react';
import QuoteStub from '../tags/quote_stub';
import Image from '../tags/img';
import Link from '../tags/link';


class Blank extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                </div>)
    }
}

export default Blank;