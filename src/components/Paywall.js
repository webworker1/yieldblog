import React from 'react';
import Header from './Header';

class Paywall extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let zoom = 1;
        if (window.mobilecheck()) {
            zoom = 0.75
        }
        return (<div className="landing-wrapper">
            <div className="feed-wrapper">
                <Header />
                <div className="card-wrapper-border-transparent">
                    <div style={{"zoom": zoom}} className="card-wrapper">
                        <span className="card-title">{this.props.title}</span>
                        {this.props.children}                        
                    </div>
                </div>
            </div>
        </div>);
    }

}

export default Paywall;