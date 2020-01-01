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
                    <Link to="/">Main</Link>
                    <a href="/charleston">Start Here</a>
                    <a href="https://www.patreon.com/yieldblog">Patreon</a>
                    <a href="/about">Contact</a>
                    <a href="/disclaimer">Disclaimer</a>
                </div>)
    }
}

export default Header;