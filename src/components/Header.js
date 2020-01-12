import React from 'react';
import { Link } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button'
import { Dropdown } from 'react-bootstrap'

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
        this.setState({dropdown: !this.state.dropdown});
    }

    renderDropdown() {
        return (
                    <Dropdown style={{width: '130px', backgroundColor: 'white'}} >
                        <Dropdown.Item href="/about"> About </Dropdown.Item>
                        <Dropdown.Item href="/disclaimer"> Disclaimer </Dropdown.Item>
                        <Dropdown.Item href="/articles"> Articles </Dropdown.Item>
                    </Dropdown>
                );
    }

    render() {
        let width = "540px"
        if (window.mobilecheck()) {
            width = "500px"
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return (<div className="header-wrapper">
                    <a href="/">Main</a>
                    <a href="https://www.patreon.com/yieldblog">Patreon</a>
                    <a href="https://mailchi.mp/2e4499d2d670/theyieldblog">Subscribe</a>
                    <div className='vertical-menu'>
                        <AwesomeButton onPress={() => this.toggleDropdown()} type="primary"><i class="fas fa-bars"></i></AwesomeButton>
                        {this.state.dropdown ? this.renderDropdown() : null}
                    </div>
                </div>)
    }
}

export default Header;