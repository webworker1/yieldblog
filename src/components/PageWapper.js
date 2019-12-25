import React from 'react';
import Header from './Header';

class PageWrapper extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="landing-wrapper">
            <div className="feed-wrapper">
                <Header />
                <div className="card-wrapper-border-transparent">
                    <div className="card-wrapper">
                        <span className="card-title">{this.props.title}</span>
                        <hr className="card-divider" />
                        {this.props.children}                        
                    </div>
                </div>
            </div>
        </div>);
    }

}

export default PageWrapper;