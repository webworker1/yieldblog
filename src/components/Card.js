import React from 'react';
import { Link, Redirect } from "react-router-dom";


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.showAll) { // Main story case
            return (
            <div className="card-wrapper-border-transparent">
                    <div className="card-wrapper">
                        <header id={this.props.cardId} className="card-title">{this.props.title}</header>
                        <hr className="card-divider" />
                        <img style={{width: "450px"}} src={this.props.imageLink}></img>
                        <div>{this.props.bodyText}</div>
                        {this.props.children}
                        <span className="fa-stack" style={{verticalAlign: "top", color: "#54a4ff", marginTop: "10px"}}>
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-arrow-down fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                </div>
            )
        } else { // Abbreviated case
            return (
                <div onClick={() =>  window.location = `/${this.props.cardId}`} className="card-wrapper-border-transparent">
                    <div className="card-wrapper">
                        <header id={this.props.cardId} className="card-title">{this.props.title}</header>
                        <hr className="card-divider" />
                        <img style={{width: "450px"}} src={this.props.imageLink}></img>
                        <div>{this.props.bodyText}</div>
                        <span className="fa-stack" style={{verticalAlign: "top", color: "#54a4ff", marginTop: "10px"}}>
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-arrow-down fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                </div>
            )
        }
    }
}

export default Card;