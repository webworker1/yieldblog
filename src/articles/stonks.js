import React from 'react';
import Image from '../tags/img';
import Link from '../tags/link';


class Stonks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    <br/>A friend of mine once asked me: "Why is the stock market not a gigantic Ponzi scheme? When companies like Amazon produce minimal profit, what's keeping their stock up?"  I think this is a fantastic question: it is so deeply the most important question one can ask, because there are so many weird edge cases that stand out, and coming up with a robust theory that predicts those edge cases helps us become better investors.
                    Having a robust understanding of those edge cases also lets us contextualize how things like value investing fit in. Let's explore this idea via Socratic method:  I'll ask a question, and you try to answer it, and then read the answer immediately below. 
                    <b><br/>1. You own 1% of the common stock of E Corp, a company which does not pay a dividend, but generates $100 of earnings.  What do you own?
                    <br/>2. You own 49% of the common stock of E Corp, a company which does not pay a dividend, but generates $100 of earnings.  What do you own?
                    <br/>3. You own 51% of the common stock of E Corp, a company which does not pay a dividend, but generates $100 of earnings.  What do you own?
                    <br/>4. You own 100% of the common stock of E Corp, a company which does not pay a dividend, but generates $100 of earnings.  What do you own?
                    </b>
                    <br/>Answers:
                    <br/>For 1-4, as an individual, you only own the stock.  The fact that you own 1%, 49%, 51%, or 100% doesn't matter in itself: you never own any of the earnings, no matter how much of the company you "own", ownership of the earnings themselves always belongs to the company.
                     <b> However</b>, as a shareholder owning a significant percentage of the common stock, you may be able to obtain a board seat or vote in favor of issuing a dividend.  If a dividend goes through, those earnings, less taxes, are yours. Notice: the earnings weren't yours, legally, then they suddenly were yours!  And the difference wasn't how many shares you owned, but what the company decided to do (of course, the more shares you own, the more likely the company will do what you want, <Link href="https://www.vox.com/technology/2018/11/19/18099011/mark-zuckerberg-facebook-stock-nyt-wsj">unless you're a Facebook shareholder</Link>.)  What fun. <br/> This is part of the motivation for the willingness to pay control premiums by acquirers:
                     companies no longer have to retain more capital than is absolutely necessary, because there's no "agency risk" of losing your job as CEO/CFO anymore: For example, Apple doesn't actually need to hold >$100bn of cash on its balance sheet, Tim Cook just wants capital flexibility to do his job, and is probably so sleep-deprived that he doesn't want to deal with capital raises 
                     should the iPhone business slump.  If you're skeptical, just ask yourself:  if you were a CEO, would you really commit to paying out 90% of your earnings as dividends every year?
                     Think of how inconvenient that would be:  your hands are tied constantly, and you have to go to the bond markets for project financing.  What a pain!  Why not just keep the cash on your balance sheet?  Unfortunately, the net result is that the market consistently undervalues your cash hoard, treating it like it doesn't even exist.
                     <Link href="https://www.investopedia.com/terms/a/agencycosts.asp">  Agency costs are very real</Link>:  the risk that management retains cash in order to maximize their own pay, rather than simply pay back shareholders is a major reason I think low-P/E stocks are in fact "fairly valued". 
                    You can think of the market's "overvaluing" of growth companies as fundamentally coming from a <Link href="https://www.investopedia.com/terms/p/principal-agent-problem.asp">principal agent problem</Link>:  we rightfully do not trust managers to do anything other than
                    maximize their own self-interest, and therefore must "overvalue" growth companies where end-markets are so good that things can't help but increase.  Think of it this way:  in the history of companies, how many times have management teams said: "Welp, things aren't going well, so we should just decapitalize the company and issue a massive special dividend.
                    Let's wrap things up."  Literally: never.  At best, management will negotiate a sale process, and at worst, they will pay themselves for as long as possible.
                    <b><br/>5.  Company A has earnings of  $1, $2, $3, $4, and $5, in consecutive years and Company B has results that look like $5, $4, $3, $2, $1. Which company would be estimated by <Link href="http://i.investopedia.com/inv/pdf/tutorials/dcf.pdf">DCF</Link> to be more valuable? Which company would likely be estimated by the market to be more valuable?
                    Why are these two different?</b>

                    <br/> Answer: Company B is of course worth more by DCF, while Company A is likely considered more valuable by the market.  Company A tends to be valued more highly than Company B because the market will believe (all else being equal) that Company A is much more likely to produce earnings of over $6 in the outyears.
                    <b><br/> 6. Bond A has dividends of  $1, $2, $3, $4, and $5, in consecutive years and Bond B has dividends that look like $5, $4, $3, $2, $1.  Which bond would be estimated by <Link href="http://i.investopedia.com/inv/pdf/tutorials/dcf.pdf">DCF</Link> to be more valuable?  Which bond would likely be estimated by the market to be more valuable?</b>
                    <br/> Answer: Bond B is more valuable under both DCF and the market, for obvious reasons:  you are getting more cash up front, and that cash is a known and contracted quantity. 
                    <br/> This leads us to the most important question that many value investors somehow never consider: if #5 and #6 are so different, why care so much about a low P/E or low P/<Link href="https://www.investopedia.com/terms/f/freecashflow.asp">FCF</Link> today? Clearly, the market is not using DCF in the strictest sense:  the market is instead solving for the terminal value of the company, over and over.
                      Why does the market care so much about the equilibrium, terminal-value of the company?  Because we <u>never own the earnings of a company, we only own what the company chooses to pay out</u>. <br/>
                    Are you in doubt?  If so, please consider buying some high-cashflow equities in China, or another country with meaningful capital controls and poor corporate governance.  The fact that you are recoiling at the idea of owning Chinese equities should be a sign that maybe the same principle can be applied to US equities:  common stock holder rights matter, corporate governance matters, and how effectively public companies return capital affects how valuations are distributed.<br/><br/>
                    The market doesn't really value earnings in the year they occur -- they value earnings and how they suggest what future per-share dividends might be.
                    In 1985, AT&T was valued at $6.50 a share.  Today, AT&T generates ~$2/share in dividends alone -- keeping the stock valued at $6.50 would represent an incredible dividend yield versus peers in the market (and as such, the stock must go up).
                    This is a long way of saying that earnings do matter: sort of.  They hint at the <u>potential</u>, but not guarantee, that in the future the company will be large enough and stable enough to begin returning cash to shareholders. <br/> Now, you might ask, "but what about share buybacks as a way of returning capital?  That increases EPS without any dividends, AND they are more tax-efficient!  Warren Buffet also loves them, so we should do them everywhere!".

                    This is quite wrong:  shareholder buybacks are valuable <u>if and only if</u> the earnings that are being accreted can be capitalized:  that is, when earnings go $1, $2, $3, $4, $5, we better be pretty damn sure that the next year is going to be around $5 <u>for the forseeable future</u>.
                    If this is true, then the very <u>potential</u> to earn higher EPS is enough to drive up the stock. If you're wrong, and you execute share buybacks in a declining business, then you become another Blockbuster or Gamestop: simultaneously decapitalizing your business while overpaying for shares that will be worthless in the future.<br/> 
                    
                    As a loyal reader has suggested, the successful acquisition of businesses that can survive using all their cash on stock buybacks is exactly Buffett's game plan:  buy 20% stakes in companies in incredibly stable, sticky businesses (i.e., Davita, a company whose customers literally die without their services), and wait for them to do share purchases over many years.  At some point, they will have repurchased enough shares that you can take them private
                    because you own the majority of shares and can tender for the remainder <u>at a much lower control premium-to-market</u>. Berkshire started with a 20% holding of ~38.5m shares, and now has a 30% holding of 38.5m shares.

                    There's another subtle point here that an astute reader will have noticed:  share repurchases are actually only a good idea if all three of the following are true:<br/>
                    a). the company lacks better investment alternatives (which, given how competitively VCs fund competitors, is a serious consideration)
                    <br/>b). the company's business has a moat strong enough to withstanding its core business being decapitalized every year.
                    <br/>c). the business itself will retain or grow in the "outyears" (i.e., 3+ years in the future, the part of the financial model that analysts seem to tend to stop thinking about.)
                    <br/><br/><b>How to be a bad value investor</b><br/>
                    Let's look at what happens when we're a bad value investor who disregards everything I just wrote. The classic "bad value investor" approach is to look for "stable" businesses with low P/Es that will "pay us back" in a short period of time with earnings, rather than growing and defensible businesses and pay a higher P/E.
                    Consider Tandy Leather Factory, a low-key microcap that sells wholesale leather, and leatherworking workshops, for DIY-type clothes makers who use words like "authentic" with earnestness.  You might go to a Tandy to learn to fashion
                    your own wallet, or belt, from whole leather that they sell to you.
                    <Image widthOverride="500px" href="https://cdn.shopify.com/s/files/1/0605/8093/files/DSC_0334_grande.JPG?9084414191194460432" />
                    Pictured above:  the exact person you'd imagine would shop at Tandy, inside a Tandy Leather Factory.
                    <Image widthOverride="500px" href="https://i.imgur.com/RrXRzm4.gif" />
                    As you can see, in 2016, Tandy Leather Factory earned nearly 70 cents a share, while trading at a mere $7.20 a share: an (optically) incredible value at a time when the S&P was around 20x.  In fact, Jeff Gramm, Tandy Leather board member, fell exactly for this trap, <Link href="https://fintel.io/n/gramm-jefferson">acquiring his first shares during this time period</Link>.
                    Since then, Tandy Leather Factory has wildly underperformed, having to raise operating expenses due to years of underinvestment, while simultaneously marketing the entire situation as an "investment phase".
                    <Image href="https://i.imgur.com/Qqj0gNu.gif" />
                    Jeff subsequently acquired enough shares to gain a board seat, fired management, and did all the things that activists tend to do.  But notice what's happened:  Jeff could have acquired any number of 20-30x P/E companies, like Republic Services Group, or EcoLab, which actually grow their businesses every year, but instead he chose
                    to buy an optically cheap stock at 10x P/E that had to eventually become a 20-30x P/E stock anyway, and is now pregnant with a massive illiquid holding of a very shitty company soon-to-be-delisted that now trades at 20-30x P/E.
                    Very large, very high-quality at-scale companies with enormous pricing power are being valued at the same market multiple as Tandy Leather, but at this point, Jeff is pregnant with a highly illiquid microcap and has nowhere to turn.
                    <br/>That, ladies and gentlemen, is a masterclass in how to be a shitty investor.
                    <br/><br/>
                    <b>TLDR:</b>
                    <br/>1. You don't own earnings, you own the equity until the management team decides you're allowed to own some of the earnings.
                    <br/>2. Managers don't work for you: they work for themselves.  The Principal Agent Problem should not be under-estimated when considering why markets prefer growth companies so much more than low-growth companies.
                    <br/>3. Don't attend Columbia Business School's Value Investing Program, like Jeff Gramm did.  Anything that leads someone to become a Tandy Leather shareholder is clearly teaching the wrong thing.  This is an education that will be expensive on the front-end and even more expensive on the back-end.
                   </div>)
    }
}

export default Stonks;



// Choosing to attend the <Link href="https://www8.gsb.columbia.edu/valueinvesting/coursesfaculty/valueinvestingprogram">Columbia Value Investing MBA</Link> is like getting Master's in Shopping at TJMaxx:  attendees are exceedingly eager and sincere in their motivations (for great deals), and have chosen a curriculum particularly narrow:
// not just business, not just investing, but <u>value investing</u>.  The students have chosen to pay gobs of money ($74,000 for tuition alone, not to mention years of lost wages) for the privilege of meeting other similarly enthusiastic truffle pigs. Given the extensively-discussed <Link href="https://www.morningstar.com/articles/950560/value-managers-on-why-the-strategy-has-underperformed">underperformance of value-oriented</Link>
// funds, getting a Columbia Value Investing in 2020 approaches a Groucho Marx joke:  the school should never accept anyone who applies: why should someone pay $74k a year (plus lost wages) to listen to their equally clueless classmates give cringey stock pitches? <br/>
// There are good value investors, and there are bad value investors.  Today, I want to talk exclusively about how to be a <u>bad</u> value investor (if you paid for an MBA at the Columbia Value Investing program, you can skip this post, because you already know).
// But first -- what is value investing?:
// <br/> 1. Epistemologically, a belief that owning shares means owning a "piece of a business" and a belief that a business possesses an "intrinsic value".
// <br/> 2. Preference to own companies that tend to be cheaper than their estimated "intrinsic value", on the basis of whatever set of statistical judgments the investor deems to be important.  Or a  preference to own companies that, once adjusted for future expected growth rates and quality of the business, are cheaper than peers.
// A value investor doesn't lose his or her title because they own Google or Amazon shares (they lose their title when they utter "hodl").  There are many high-multiple high-growth companies that (good) value investors love:  Visa, Mastercard, Facebook,
// Republic Services Group, etc. etc.
// <br/> 3. A belief that the value investor can correctly estimate "intrinsc value" better than his or her peers, and that the market will eventually provide a different price for the asset, enabling an opportunity to sell.
// <br/> If you did a "man on the street" interview of Wall Street, these are probably the modal characteristics that people would throw in, and it doesn't represent a comprehensive or even nuanced description.

// 1. Using DCF.  This is a big one.  When it comes to historical performance, imagine two companies.  Company A has earnings of  $1, $2, $3, $4, and $5, in consecutive years and Company B has results that look like $5, $4, $3, $2, $1.  People are quick to point out that Company B ends up being valued more highly than Company A according to DCF,
// yet the market tends to pay a lot more for Company A than Company B:  everyone wants numbers that are going up and not down, and therefore, there's an opportunity for value investors to arbitrage the simple stupidity of others.

// I would argue that DCF is fundamentally being misapplied in modern investing.  We discount because there is an <u>explicit</u> opportunity cost:  literally, with $100 today, I can make a 5% yield by lending to TransDigm (and I do, and it's awesome). With equities, I would argue that we should in fact only discount dividends received:
// there is effectively no point in discounting equity as an individual investor because <u>you will never see that money</u>.  At first blush, this seems like an incredibly tenuous argument:
