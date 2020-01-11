import React from 'react';
import { Link } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button'
import {VerticalListMenu} from 'lucid-ui'
  
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
        return (
                    <VerticalListMenu style={{width: '130px', backgroundColor: 'white'}} >
                        <VerticalListMenu.Item>
                            <a href="/about">About</a>
                        </VerticalListMenu.Item>
                        <VerticalListMenu.Item>
                            <a href="/disclaimer">Disclaimer</a>
                        </VerticalListMenu.Item>
                        <VerticalListMenu.Item>
                            <a href="/articles">Articles</a>
                        </VerticalListMenu.Item>
                    </VerticalListMenu>
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
                    {/* <a href="/subscribe">Subscribe</a> */}
                    <a href="https://www.patreon.com/yieldblog">Patreon</a>
                    <div className='vertical-menu'>
                        <AwesomeButton onPress={() => this.toggleDropdown()} type="primary"><i class="fas fa-bars"></i></AwesomeButton>
                        {this.state.dropdown ? this.renderDropdown() : null}
                    </div>
                </div>)
    }
}

export default Header;