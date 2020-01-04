import React from 'react';
import { Link } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.renderDropdown =  this.renderDropdown.bind(this);
    }

    toggleDropdown() {
        console.log('toggling')
        console.log(this.state)
        this.setState({dropdown: !this.state.dropdown});
    }

    renderDropdown() {
        return (<div> Hello Nurse </div>);
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
                    <AwesomeButton onPress={() => this.toggleDropdown()} type="primary"><i class="fas fa-bars"></i></AwesomeButton>
                    {this.state.dropdown ? this.renderDropdown() : null}
                </div>)
    }
}

export default Header;