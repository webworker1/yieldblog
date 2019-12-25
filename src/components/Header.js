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
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return (<div className="header-wrapper">
                    <Link to="/">Main Feed</Link>
                    <a href="/charleston">Start Here</a>
                    <a href="/#subscription">Subscribe</a>
                    <a href="/#about">About</a>
                    <a href="/#disclaimer">Disclaimer</a>
                </div>)
    }
}

export default Header;