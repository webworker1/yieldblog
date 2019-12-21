import React from 'react';
import { Link } from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let width = "540px"
        if (window.mobilecheck()) {
            width = "500px"
        }
        return (<div style={{width: width}} className="header-wrapper">
                    <Link to="/">Main Feed</Link>
                    <a href="#charleston">Start Here</a>
                    <a href="#subscription">Subscribe</a>
                    <a href="#about">About</a>
                    <a href="#disclaimer">Disclaimer</a>
                </div>)
    }
}

export default Header;