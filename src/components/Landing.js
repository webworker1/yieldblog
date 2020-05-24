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
import ChinaRealEstate from '../articles/china_real_estate';
import StarMetals from '../articles/star_metals';
import LBrands from '../articles/l_brands';
import China_2 from '../articles/china_2';
import Cyberpunk from '../articles/cyberpunk';
import Stonks from '../articles/stonks';
import Airlines from '../articles/airlines';
import JPow from '../articles/jpow';

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            charleston: false
        }
    }

    componentDidMount() {
      if (window.mobilecheck()) {
        this.setState({zoom: 0.75, aboutMeImage: "https://i.imgur.com/pDjGP1Y.png"})
      } else {
        this.setState({zoom: 1.5, aboutMeImage: "https://media0.giphy.com/media/UkfHg7WRqniCY/200.webp?cid=790b7611d0a5c82eedfec837bdbf6a28c1fe055aee700cf0&rid=200.webp"})
      }
    }

    toggleCharleston = () => {
        this.setState({charleston: !this.state.charleston})
    }

    render() {
        return (<div style={{zoom: this.state.zoom}} className="landing-wrapper">
            <div className="feed-wrapper">
                <Header />
                <Card title="What happens when interest rates are negative?"
                    bodyText="The Principle of Infinite Accumulation."
                    imageLink=""
                    cardId="jpow"
                    showAll={true}
                    realLink={true}
                >
                    <JPow />
                </Card>

                <Card title="JPow go BRRRRR: First-Hand Look at QE4"
                    bodyText="Fed error in your favor: collect $1 billion."
                    imageLink="https://kkingdavid.files.wordpress.com/2017/09/bank-error-in-your-favor.png"
                    cardId="jpow"
                    showAll={true}
                    realLink={true}
                >
                    <JPow />
                </Card>
                <Card title="Why did Buffett overpay for Delta, and are the airlines going bankrupt?"
                    bodyText="When profitability comes almost exclusively from price collusion"
                    imageLink="https://venicedelacruz.files.wordpress.com/2016/06/050914_1300_thenexttime1.gif?w=350"
                    cardId="airlines"
                    showAll={true}
                    realLink={true}
                >
                    <Airlines />
                </Card>
                <Card title="How to be a shitty investor"
                    bodyText=""
                    imageLink="https://melmagazine.com/wp-content/uploads/2019/07/Stonks_Meme-1280x533.jpg"
                    cardId="stonks"
                    showAll={true}
                    realLink={true}
                >
                    <Stonks />
                </Card>

                <Card title="Cyberpunk 2077 Hype Train:  Is CD Projekt Red Overvalued?"
                    bodyText="If this gentleman were entirely gold, it would be roughly what the market expects out of CD Projekt Red"
                    imageLink="https://i.imgur.com/IaPSo6i.gif"
                    cardId="cyberpunk"
                    showAll={false}
                    realLink={true}
                >
                    <Cyberpunk />
                </Card>

                <Card title="China Part II: Resolving the Impossible Trinity"
                    bodyText="Sincere apologies to the NYTimes for stealing their image"
                    imageLink="https://static01.nyt.com/images/2008/12/21/weekinreview/ponzi-600x583.jpg"
                    cardId="china_2"
                    showAll={true}
                    realLink={true}
                >
                    <China_2 />
                </Card>

                <Card title="Limited Brands: Is There a Bottom to Victoria's Secret?"
                    bodyText="How bad can it get?"
                    imageLink="https://media.bizj.us/view/img/10468677/victorias-secret-las-vegas*1200xx1800-1014-0-185.jpg"
                    cardId="l_brands"
                    showAll={this.props.showAll}
                    realLink={true}
                >
                    <LBrands />
                </Card>
                <div id="778450467">
                        {
                            window._mNHandle.queue.push(function (){
                                window._mNDetails.loadTag("778450467", "300x250", "778450467");
                            })
                        }
                </div>
                <Card title="Ripped off in Atlanta: Star Metals Crowdstreet Deal"
                      bodyText="If you invest in this, you are literally paying someone to lend them money"
                      imageLink="https://prod-thumbnails.investorportal.pictures/custom/1170/400/property-images/Copy_of_ALLEN_MORRIS-ATLANTA_STAR_METALS-04-OFFICE_BLDNG-C6-003-1576278296723-1576278392934.png"
                      cardId="star_metals"
                      realLink={true}
                >
                    <StarMetals />
                </Card>

                <Card title="China Questions, Part I: How Overvalued is the Chinese Real Estate Market?"
                      bodyText="Also: seeing the Laffer Curve in Dallas Real Estate taxes"
                      imageLink="http://www.beijingrealestates.com/Chevalier1.jpg"
                      cardId="china_real_estate"
                      showAll={this.props.showAll}
                      realLink={true}
                >
                    <ChinaRealEstate />
                </Card>
                <Card title="Saudi Aramco: Vanity IPO of the 100-Year Kingdom"
                      bodyText="The Perilous Kingdom of Saud opens its books"
                        imageLink="https://static01.nyt.com/images/2019/12/05/business/05aramcoIPO/05aramcoIPO-superJumbo.jpg"
                      cardId="aramco"
                      realLink={true}
                >
                    <Aramco_1 />
                </Card>
                <Card title="Transdigm Bonds are a Cleveland Dreamboat"
                      bodyText="Proprietary sole-sourced widgets to the world's best customer"
                      imageLink="https://static.seekingalpha.com/uploads/2017/3/10/saupload_4H7V-lc_31NRzkxllwmK5ydHtvEt1Hf5bmjLB5gHs-f9NN3Z8MJxSyFTkweTR5Vb4A18c3wz10EQRDs-62B7uBkrmZC6Z235nzXBSjBVV2oJGpNWsfNOeUPo34oE0RMxrQk6wv_BvcVOKuUL3Q.png"
                      cardId="transdigm"
                      realLink={true}
                >
                    <Transdigm />
                </Card>
                <Card title="What the Cushman & Wakefield IPO teaches us about how not to invest"
                      bodyText="How do 51,000 employees generate only $4bn of value?"
                      imageLink="https://i.imgur.com/KV8pMGH.png"
                      cardId="cushman"
                      realLink={true}
                >
                    <Cushman />
                </Card>
                <Card title="The Great Highway Robbery of Charleston, SC"
                      bodyText="Haven't you ever wondered: do those hotel guys just make a killing?"
                      imageLink="https://i.imgur.com/mj515FH.png"
                      showMainStory={this.state.charleston}
                      cardId="charleston"
                      realLink={true}
                      >
                    <Charleston />
                </Card>
                <Card title="Why the market undervalues monopolies and oligopolies"
                      bodyText="The #1 advantage you have over fancy Wall Street analysts"
                      imageLink="http://ballstonapush.pbworks.com/f/1326468984/Standard_oil_octopus_loc_color.jpg"
                      cardId="monopoly"
                >
                    <MonopolyEssay />
                </Card>
                <Card title="Crowdfunding site mistakenly advertises not-so stellar returns"
                bodyText="Always read the fine print"
                cardId="crowdstreet"
                imageLink="https://i.imgur.com/GBj4rP6.png">
                    <CrowdstreetReturns toggleCharleston={this.toggleCharleston} />
                </Card>

                <Card title="About Me"
                imageLink={this.state.aboutMeImage}
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