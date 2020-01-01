import React from 'react';
import { Link, Redirect } from "react-router-dom";


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
        console.log(this.props.cardId, this.state.showMainStory, this.props.realLink)
        if (this.state.showMainStory && this.props.realLink) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            return <Redirect to={`/${this.props.cardId}`} />
        } else if (this.props.showMainStory || this.state.showMainStory) {
            return (
                <div id={this.props.cardId} className="card-wrapper-border-transparent">
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
                        {this.props.children}
                        <span class="fa-stack" style={{verticalAlign: "top", color: "#54a4ff", marginTop: "10px"}}>
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fas fa-arrow-down fa-stack-1x fa-inverse"></i>
                        </span>


                    </div>
                </div>
            )
        }
    }
}

export default Card;