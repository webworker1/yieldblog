import React from 'react';
import { Link } from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="header-wrapper">
                    <Link to="/">Main Feed</Link>
                    <a href="#charleston">Start Here</a>
                    <a href="#about">About</a>
                    <a href="#disclaimer">Disclaimer</a>
                </div>)
    }
}

export default Header;