import React from 'react';
import Header from './Header';
import Card from './Card';
import Cushman from '../articles/cushman';
import CrowdstreetReturns from '../articles/crowdstreet_returns';
import Charleston from '../articles/charleston';
import MonopolyEssay from '../articles/monopoly_essay';
import Transdigm from '../articles/transdigm';
import Aramco_1 from '../articles/aramco_1';
import About from '../articles/about';
import Disclaimer from '../articles/disclaimer';

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            charleston: false
        }
    }

    componentDidMount() {
      if (window.mobilecheck()) {
        this.setState({zoom: 0.75})
      } else {
        this.setState({zoom: 1.5})
      }
    }

    toggleCharleston = () => {
        this.setState({charleston: !this.state.charleston})
    }

    render() {
        return (<div style={{zoom: this.state.zoom}} className="landing-wrapper">
            <div className="feed-wrapper">
                <Header />

                <Card title="Saudi Aramco: Vanity IPO of the 100-Year Kingdom"
                      bodyText="The Perilous Kingdom of Saud opens its books"
                      imageLink="https://www.offshoreenergytoday.com/wp-content/uploads/2019/11/manifa-oil-field-source-saudi-aramco.jpg"
                      cardId="aramco"
                >
                    <Aramco_1 />
                </Card>
                <Card title="Transdigm Bonds are a Cleveland Dreamboat"
                      bodyText="Proprietary sole-sourced widgets to the world's best customer"
                      imageLink="https://static.seekingalpha.com/uploads/2017/3/10/saupload_4H7V-lc_31NRzkxllwmK5ydHtvEt1Hf5bmjLB5gHs-f9NN3Z8MJxSyFTkweTR5Vb4A18c3wz10EQRDs-62B7uBkrmZC6Z235nzXBSjBVV2oJGpNWsfNOeUPo34oE0RMxrQk6wv_BvcVOKuUL3Q.png"
                      cardId="transdigm"
                >
                    <Transdigm />
                </Card>

                <Card title="What the Cushman & Wakefield IPO teaches us about how not to invest"
                      bodyText="How do 51,000 employees generate only $4bn of value?"
                      imageLink="https://i.imgur.com/KV8pMGH.png"
                      cardId="cushman"
                >
                    <Cushman />
                </Card>
                <Card title="Why the market undervalues monopolies and oligopolies"
                      bodyText="The #1 advantage you have over fancy Wall Street analysts"
                      imageLink="http://ballstonapush.pbworks.com/f/1326468984/Standard_oil_octopus_loc_color.jpg"
                      cardId="monopoly"
                >
                    <MonopolyEssay />
                </Card>
                <Card title="The Great Highway Robbery of Charleston, SC"
                      bodyText="Haven't you ever wondered: do those hotel guys just make a killing?"
                      imageLink="https://i.imgur.com/mj515FH.png"
                      showMainStory={this.state.charleston}
                      cardId="charleston"
                >
                    <Charleston />
                </Card>
                <Card title="Crowdfunding site mistakenly advertises not-so stellar returns"
                bodyText="Always read the fine print"
                cardId="crowdstreet"
                imageLink="https://i.imgur.com/GBj4rP6.png">
                    <CrowdstreetReturns toggleCharleston={this.toggleCharleston} />
                </Card>

                <Card title="About Me"
                imageLink="https://media0.giphy.com/media/UkfHg7WRqniCY/200.webp?cid=790b7611d0a5c82eedfec837bdbf6a28c1fe055aee700cf0&rid=200.webp"
                bodyText="Actual footage of my career in high finance"
                cardId="about">
                    <About />
                </Card>

                <Card title="Disclaimer"
                imageLink="https://cdn11.bigcommerce.com/s-10c6f/images/stencil/1280x1280/products/4429/9556/WS33057-10__58291.1545866110.png?c=2&imbypass=on"
                bodyText="TLDR: Don't come cryin'"
                cardId="disclaimer">
                    <Disclaimer />
                </Card>

            </div>
        </div>)
    }
}

export default Landing;