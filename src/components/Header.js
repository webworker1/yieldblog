import React from 'react';
import { Link } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button'

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
                    <a href="/">Main</a>
                    <a href="/subscribe">Subscribe</a>
                    <a href="https://www.patreon.com/yieldblog">Patreon</a>
                    <AwesomeButton onClick={() => this.renderOptions()} type="primary"><i class="fas fa-bars"></i></AwesomeButton>
                </div>)
    }
}

export default Header;