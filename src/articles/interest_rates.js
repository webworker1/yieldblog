import React from 'react';
import Image from '../tags/img';
import Link from '../tags/link';
import QuoteStub from '../tags/quote_stub';


class InterestRates extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
            
            Historian Paul Schmelzing recently <Link href="https://www.bankofengland.co.uk/-/media/boe/files/working-paper/2020/eight-centuries-of-global-real-interest-rates-r-g-and-the-suprasecular-decline-1311-2018.pdf?la=en&hash=5197703E8834998B56DD8121C0B64BFB09FF4881">published</Link> an exceptional working paper on eight centuries of global real and nominal interest rates, from 1311 to 2018.  When I say "interest rates", I mean both literal rates (paid for debt servicing), as well as effective rates (i.e., at what earnings multiple stocks trade).  Schmelzing is more limited in his definition but I will use the term "falling rates" to mean both lowering bond yields and rising equity multiples.
            <Image src="https://i.imgur.com/T8SWWii.png" />
            What he discovered surprised me: nominal and real rates over very long periods of time are in "suprasecular decline" and that the fall in real and nominal interest rates over the last forty years are merely a reversion to long-term historical trends.<br/>
            What's more surprising, the rate of decline is fairly "rapid" across human history at about 2 basis points (.02%) a year.  In 100 years, interest rates will be a full 2% lower in expectation. If this phenomenon is reliable and persists into the future, what will the world look like when interest rates are near-zero or negative? Allow me to engage in some rank speculation. <br />
                      
            <br />1). Outsized wealth creation will no longer be possible by professional "asset compounders" like Warren Buffett because there's not a lot of "compounding" one can do when rates are so low.  I mean this very literally:  since expected human lifespans are only getting a little bit longer, and the <Link href="https://www.investopedia.com/terms/r/ruleof72.asp">Rule of 72</Link> remains true for all <Link href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2568257">non-relativistic finance</Link> we literally can't live long enough to compound enough money to move the needle.
            <br/> Instead, capitalism will heavily favor "asset gatherers" and "money-raisers" that invest in direct capital projects -- people who raise a lot of money to do something low-return and (legally) skim a bit off the top, because there's going to be simply so much more money floating around and the return hurdle is so much lower.  Insofar as this is already painfully true of capitalism by the early 2000s and 2010s, it will be even more the dominant reality for our grandchildren's grandchildren.
            Someone like Warren Buffett was truly born in the right decade:  a time when, at the midpoint of his life, interest rates were unusually high (i.e., assets were unusually cheap) and began a long decline, driving outsized returns for "professional capitalists" and especially for value investors who correctly assigned a very high cost of capital to earnings.           
            The dominant model of wealth creation has shifted from squirrely hoarders like Buffett to either bombastic asset gatherers like Adam Neumann, or to extremely talented builders like Elon Musk, in part because interest rates are much, much lower.
            <br/><br/>2). Monopolies will be more valuable than ever and non-monopolies will trade at more significant discounts. As required returns lower, capital will flow toward non-monopolistic, competitive industries (think Quip, Boll & Branch, and whatever other favorite podcast sponsor you have) and reduce returns in those industries even further than where they are now. 
            What really matters isn't how much money a company is making per se, but the certainty that they will earn those returns in the future.  This certainty in maintaining pricing, margins, and market share enables investors to capitalize businesses at very high multiples because there's "nothing else left to invest in".  More on this later.
            <br/><br/>3). Commodity-capital industries become particularly bad industries over time.  Finance (all of it: main street banking, investment management, insurance) becomes even more commoditized than it already is.  Funnily, I think investment banking is a service and will be excluded from this implosion, and the high-end firms should remain well-insulated as capital raising and valuation-setting activities from IPOs remain a fairly sensitive activity.  Real estate cap rates should continue to decline and so should their associated capitalization requirements and costs of capital:  one day we'll commonly start to get 100% debt financed apartment complexes that only cost 3% to service (China is perilously close to this phenomenon already).
            <br/><br/>4). The rise of what I can only describe as Neofeudalism.  Imagine a world where a "typically risky" asset has a 2.5% nominal return:
            <br/>a. If you can build an income stream, it will trade at 40x earnings.
            <br/>b. If you fail to build an income stream, you need 40x the money to replicate the same-sized income stream.
            <br/>c. If your parents were rich and frugal, you will be rich, because they amassed all of the asset increase benefits from when interest rates were high and dropped.  Inheritances, in some weird reversion to the mean, will once again become a greater determinant of wealth.
            <br/>d. It will be almost impossible to become independently wealthy as a wage-worker, because if you save money, you'll only be earning a 2% nominal return. 
            <br/>e. "High-certainty assets" will be seen as even more valuable than before, relative to peers.  This is due a weird intersection of behavioral finance and arithmetic:  an investor being willing to accept a company valued at 1% cap rate instead of 2% will go from valuing a company at 50x earnings to 100x earnings. In low interest rate worlds, the <u>value of securitizing and financializing income streams only grows</u>, because the equivalent capital required to generate those equivalent streams becomes very high.
            This is why payments startups make so much more sense today than ever before:  their revenue streams are incredibly reliable, on an ever-growing churn of economic activity.  Even if their profits are low now, the certainty of the growth of future cash-flows is extremely high,
            and being certain as interest rates asymptote to zero enables the biggest and best valuations.
            <br/><br/> Why do low future rates bring about Neofeudalism?  Interest rates are like a very long lever.  As rates go lower, the lever gets longer, and the more valuable income streams become.  At some point the lever itself becomes a sort of king-maker:  if you are able to build a perpetual-income business of any kind, you will effectively control an economic fiefdom, because that income stream will be considered incredibly valuable.  And if you fail to create that perpetual income stream, you'll be a serf, forced to either deplete your savings (since returns aren't high enough) or work forever.
            <br/><br/> This also re-calibrates our understanding of Baby Boomer wealth.  They entered the job market when interest rates were at their very highest in <u>recent human history</u>.  If you were a reasonably competent young person who could secure a job, you could compound an unbelievable amount of wealth over the ensuing 5 decades.
            <br/><br/>So, if a 65-year old guy ever tells you to "pull yourself up by your bootstraps", just point to Schmelzing's chart and utter the anthem of 2020:
            <Image src="https://i.imgur.com/rQMcYMB.jpg" />



        </div>)
    }
}

export default InterestRates;