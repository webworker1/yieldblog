import React from 'react';
import Image from '../tags/img';

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    Hi, I'm Zack.  I was a professional investor for seven years working as a high yield bond analyst, long/short equity hedge fund analyst, and then spent some time back again as a hybrid of the two roles.
                    <br/><br/>If you've noticed, there are very few blogs by professional investment analysts, despite the fact that writing and disseminating opinions is something we do all the time. This is because jobs are so few and far in between that no one would dare stick their neck out of the ground and risk getting fired.
                    <br/><br/>I'm now a software engineer, where jobs are plentiful and opinions always spicy, and am finally free to write about the buyside.
                    <br/><br/> If you'd like to get in touch, please reach out at <Image widthOverride="200px" href="https://i.imgur.com/gPTJCbT.png" />
                </div>)
    }
}

export default About;