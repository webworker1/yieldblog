import React from 'react';
import Image from '../tags/img';
import Link from '../tags/link';
import QuoteStub from '../tags/quote_stub';


class JPow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
            Can you imagine how pissed Warren Buffett must be right now?  Here is a man who has sat around for over a decade, accumulating over $120bn of cash equivalents on Berkshire's balance sheet, sitting through three rounds of quantitative easing
            and negative yields from European debt (which drove European capital to America, driving up prices further). On top of that, his only major new equity investments, the airlines, have totally imploded and are now at the mercy of Department of Transportation Secretary Elaine Chao
            and Treasury Secretary Steve Mnuchin.  Now, a virus appears, Warren's T-Bills spike in value, the stock market implodes, the economy begins a giant failure cycle.  Warren is practically dripping, and then:
            <Image src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRsU2IyHm6KU/v0/1400x-1.jpg" /><br/>
            <b>Play the music for maximum effect<br/></b>
            <iframe width="500" height="200" src="https://www.youtube.com/embed/8fVabXPjEXY?start=18" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            <Link href="https://markets.businessinsider.com/news/stocks/federal-reserve-coronavirus-relief-billion-corporate-credit-etf-inflow-bonds-2020-3-1029028126">JPow beats him to the punch</Link>, putting in a massive pre-market order for LQD (Blackrock's bond ETF), thereby
            driving down corporate yields, decreasing borrowing costs, and boosting stocks that would otherwise have much higher cost of new financing.  Below, the Fed's balance sheet (6M actually means $6trn USD, obv):
            <Image src="https://i.imgur.com/Yj9CqoA.png" />
            Much has been written about "money printing", but let's see what the actual mechanic is, which will help us also understand why bond ETF NAVs traded so far below "intrinsic value" of their underlying bond portfolios.  First, let's look at some investment-grade bond prices,
            as provided to us by Fidelity, hot off the press as of market-close April 17 2020:
            <Image src="https://i.imgur.com/1PII0Im.png" />
            Notice how while almost every bond has an "ask", there are very few bids: <u>for most bonds in even normal markets, there are very few bids</u>.  When I worked at Fidelity as a high yield credit analyst, we participated primarily in new issuances and were effectively "pregnant":
            when the typical transaction size in the bond market is $20,000 and you own $100m, there is no "selling" without serious impairment.

            <br/><br/>In late March / early April of 2020, despite owning extremely high quality assets that had a near-zero chance of default (like Davita bonds), most of my bond portfolio traded down ~10-15%
            as the only "asks" that were being filled were ones at meaningful discounts.<br/><br/>Now, imagine you are a funds administrator at Blackrock.  Every day, you must mark every single bond holding "to market", even when there is no price action that day.
            What do you when you when you have no price?<br/>
            <br />1). If you mark your portfolio <u>above</u> where you can sell bonds, a withdrawing investor will be benefited and remaining investors will be harmed: the remaining investors of a fund will incur losses that should have been borne by the withdrawing investor: bonds aren't able to be liquidated at the prices you've set.
            <br />2). If you mark your portfolio <u>below</u> where you can sell your bonds, a withdrawing investor will be penalized and remaining investors will be benefited: investors looking to withdraw money will be effectively paying a "fee" to the remaining fund shareholders, getting less cash than what their share of the bonds sold for.
            <br/><br/> It's totally unsurprising that BlackRock is choosing #2 and undermarking their investments:  BlackRock wants to discourage fund withdrawals and does not want to deal with the ensuing LP lawsuits when remaining investors get hit with fund losses.
            Public market investors who are buying the ETF also have an incentive to underbid the NAV: since so many bonds are no-bid, the NAV may still be an insufficiently conservative estimate.
            From this context, Jerome Powell's decision to make a massive bid in LQD (BlackRock's investment grade bond ETF) makes perfect sense: BlackRock would take those funds, bid on more underlying assets, and create stable values from which regular LPs can then withdraw their money.
            <br/><br/><b>How does this compare to regular QE?</b><br/><br/>
            This is far more effective than traditional US Federal Reserve open market operations of US Treasury buying. A bank that goes from holding treasuries to holding cash isn't any more likely to lend!
            Why not just lend directly to corporations that are issuing debt?  JPow has effectively pioneered a new ultra-aggressive monetary policy that picks winners from those lucky enough to be classified as "investment grade" by ratings agencies. 
            <br/><br/>Is this money-printing? Did JPow, in fact, go "BRR"? Let's look at what happens on a balance sheet basis:
            <Image src='https://i.imgur.com/rB0FXcC.png' />
            The upshot is this: The US Federal Reserve does in fact have a magic money machine (with help from their friends at the US Treasury Department), but the net impact of "money printing" is that assets are bid higher than where they would otherwise be.  This means that without Fed actions, my bonds would likely still
            trade in the mid 80s, and I would have experienced "paper" losses that would (likely) eventually be money-good.  For forced sellers, the Treasury has done them a true solid:  a forced seller in the investment grade bond market is now suffering around a 5% realized capital loss, instead of a 15% loss.
            <br/><br/>The true effect of money-printing here is that the Fed is simply "overpaying" for assets at a time when most investors are looking for deals.  Investors like Buffett who hold a ton of cash want an economic death spiral and have little reason to bid until the returns offered are truly juicy.
            What JPow has really done is:
            <br/>1). Transferred wealth from the US government to those that are selling (arguably bad for society).
            <br/>2). Provided a "floor" bid that prevents bond prices from truly imploding, enabling companies to continue issuing loans to cover revenue declines (arguably good for society).
            <br/>3). Boosted bond prices / driven down corporate interest rates by overpaying for bonds, thereby providing effectively massive loan subsidies to publicly-traded corporations over privately-held small businesses (arguably neutral for society, but unfair overall). 
            <br/>4). Royally-fucked Warren Buffett, which I'm sure was worth the lulz. (Don't forget, JPow worked in industrials private equity for nearly a decade and likely had to bid against Buffett in various deals).
            <br/><br/>With your typical PeerStreet crowdsourced home loan trading at 12% yields while Delta continues to borrow at 5% for the same period of time, we now see just how massively advantageous being a large public US corporation has become. 
            <br />Most importantly, <b>there is no incremental inflation from these Fed actions, despite the fact that there was moneyprinting</b>:  if your bonds were previously worth $100 and now they're worth $95 or $100 again, are you going to suddenly start running to Costco and bidding up toilet paper? No!  Or, if you do, it's because you had the <Link href="https://med.stanford.edu/news/all-news/2020/04/stomach-complaints-common-in-covid-19-patients.html">COVID-shits</Link>, not because
            JPow overpaid for your bonds. Not all money-printing guarantees inflation.

        </div>)
    }
}

export default JPow;