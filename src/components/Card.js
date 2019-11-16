import React from 'react';
import { Link } from "react-router-dom";


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMainStory: this.props.showMainStory || false
        }
        this.toggleShown = this.toggleShown.bind(this);
    }

    toggleShown() {
        this.setState({showMainStory: true});
    }

    render() {
        if (this.props.showMainStory || this.state.showMainStory) {
            return (
                <div className="card-wrapper-border-transparent">
                    <div onClick={() => this.toggleShown()} className="card-wrapper">
                        <span className="card-title">{this.props.title}</span>
                        <hr className="card-divider" />
                        {this.props.children}
                    </div>
                </div>
            )
        } else {
        return (
                <div className="card-wrapper-border-transparent">
                    <div onClick={() => this.toggleShown()} className="card-wrapper">
                        <span id={this.props.cardId} className="card-title">{this.props.title}</span>
                        <hr className="card-divider" />
                        <img style={{width: "450px"}} src={this.props.imageLink}></img>
                        <div>{this.props.bodyText}</div>
                    </div>
                </div>
            )
        }
    }
}

export default Card;