

import React from 'react';
import QuoteStub from '../tags/quote_stub';
import Image from '../tags/img';
import Link from '../tags/link';


import { PayPalButton } from "react-paypal-button-v2";
 
class Subscription extends React.Component {
    render() {
        return (
            <div className="article-wrapper">
                If you are enjoying this blog, consider joining the Yield Blog community.  Membership is $5/month for the first 100 members, which, if you are reading this, applies to you.  What do you get? <br />  <br />
                1). Access to the Yield Blog Slack Group, where you can ask me and the community questions on my opinion about anything investment-related, including my opinions on specific deals that you might be interested in.  For every writeup I do, I look at a half-dozen other stocks/bonds/real estate deals that aren't worth writing about, and you'll get to hear my opinions on these. <br/> <br/>
                2). A monthly e-mail with my current portfolio holdings, in excruciating detail (down to the 0.1%). <br /> <br />
                If you think <Link href="http://reddit.com/r/wallstreetbets">Wall Street Bets</Link> is the antithesis of wealth creation, the Yield Blog Slack community is for you: my primary goal is to build a real community of serious investors.  Hopefully a nominal fee of $5/month keeps people serious and engaged.
                3). Access to articles <u>before</u> deals are closed (being fast is just as important as being right), and access to my e-mail blast whenever I spot a promising idea. <br /> <br />
                4). Ability to make suggestions on future ideas that I research:  I'm mostly writing this blog because I have to find new investments every couple months to allocate my household income, and your ideas to diligence are greatly appreciated.<br /> <br />
                $5/month is a nominal figure that is designed mostly to retain serious community members.  It's also much cheaper than the fees charged by any bond or equity fund manager, and you get the fun of operating your own portfolio.  The vast majority of my "earnings" from this blog come from my own investment returns, and hopefully sharing my thoughts with you keeps me honest. <br/>
                Required legal disclaimer: I am not a financial advisor and this is not financial advice. <br /> <br />
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="5LACY4R5CHHPJ" />
                    <input style={{"width": "140px"}} type="image" src="http://mileasset.com/wp-content/themes/Avada-Child-Theme/PayPal-Button.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>            
            </div>
        );
  }
}

export default Subscription;