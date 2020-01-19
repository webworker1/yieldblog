
import React from 'react';
import Image from '../tags/img';
import Link from '../tags/link';
import QuoteStub from '../tags/quote_stub';

import Paywall from '../components/Paywall'

class China_2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    <br/>Like <Link href="https://www.amazon.com/dp/B00JTYQJ3K/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1">Brave New World</Link>, economic activity in China always struck me as a little bit circular -- aggressive local government growth targets, aggressive subsidies in strategic industries, extensive regulatory bureaucracy, and of course, ghost cities.
                    Economic progress always seems paired with meaningful negative externalities, whether it be <Link href="/china_real_estate">soaring home prices</Link> or <Link href="https://chinapower.csis.org/air-quality/">poor air quality</Link>.  Where in all this frenzy of activity would we see real productivity and GDP growth?
                    <br/><br/><Link href="https://www.merics.org/sites/default/files/2018-05/191017_merics_ChinaMonitor_42.pdf">In an incredible paper from Merics China Monitor</Link>, UCSD professor Victor Shih shows that the Chinese economy does not come remotely close to earning its cost of capital: <u>interest is actually growing faster than GDP</u>, by a LOT.  
                    Let me repeat that in larger font: <b><h3> Interest grows faster than GDP in China.</h3></b>  Marginal growth in the Chinese economy could actually be considered a Ponzi scheme: interest service on credit was 17trn RMB in 2017 while incremental nominal GDP was only 7trn RMB: for every $2.50 lent out, we saw $1 of GDP growth.  That's not economic profit, that's just revenue:  it's completely possible that with a growth of $1 of revenue per $2.50 of credit, that the <u>Chinese economy is engaging in negative return activity</u> at this point.
                    <Image widthOverride="500px" src="https://i.imgur.com/ZFc1caD.png" />
                    A large portion of incremental interest growth seems to be getting rolled over: total credit grew by <u>52trn RMB</u>, growing at 34% YoY despite only a 6% GDP growth rate.  If Shih's estimate is correct, 52trn RMB is colossal. That's equivalent to $7.5trn USD, or roughly 35% of US GDP, in new credit being issued.
                    <Image widthOverride="500px" href="https://media3.giphy.com/media/d3MMyApsVs3Vpuvu/giphy.gif"/> 
                    This effectively makes the Chinese economy a Ponzi scheme that lights money on fire: State-owned enterprises owe loans that can never get repaid, and State-owned banks continually amend and extend non-performing loans (NPLs).
                    Since there never comes a "judgment day" where a self-interested third-party demands repayment, the entire cycle of borrowing at high rates and investing at a low return continues indefinitely.  This inability of banks to recognize nonperforming loans is what most gives China its Brave New World quality: with muted market signals it's impossible to tell if you're building a bridge to nowhere.
                    The Chinese government is paying people with its own paper, and recording debts, which are also denominated in its own paper.
                    <Image widthOverride="500px" src="https://i.imgur.com/Y96BtKj.png" />
                    Above, total credit has grown 33.8%, from 295% of Chinese GDP to 329% of GDP. 

                    <QuoteStub quotedText="Driving around China, you can tell that something is not quite right. Many cities are ringed with empty apartment towers. Extravagant new government buildings have more rooms than officials to put in them. Chinese factories produce about half of the world’s steel and far more than the country could ever hope to use. Land has been reclaimed from the sea to create factories that have never been built." />

                    Culturally, its bureaucracy supports reporting incorrect figures:

                    <QuoteStub quotedText={"It was 2013, and there was mounting disbelief outside China that bad loans in the country’s banks could account for only about 1% of their total assets, as was claimed by the official data. Given the pace of lending and the scale of dubious construction projects around the country, that number seemed preposterously low. Are we really expected to believe the numbers? I asked. “If China were to declare that nonperforming loans were in fact much higher than thought, does anyone really benefit?” he said."} />
                    <a target="_blank" href="https://www.amazon.com/gp/product/B073XCM3L1/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B073XCM3L1&linkCode=as2&tag=theyieldblog-20&linkId=7a12b3c8ef3d51bb92ce0c5a588f1b08">China's Great Wall of Debt: Shadow Banks, Ghost Cities, Massive Loans, and the End of the Chinese Miracle</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=theyieldblog-20&l=am2&o=1&a=B073XCM3L1" width="1" height="1" border="0" alt="" />
                    <br/>
                    <Paywall
                        text="I'm very proud of the rest of this article and I hope you read it. You will at the very least get some dinner party ammunition, and I found the conclusions on China pretty eye-opening. Join our Patreon for instant access." blurred={
                        <div>Of course, we have to compare this to a known economy:
                        The US economy grows at roughly 2%, while total credit grew by roughly 5.3%.  So, for a reasonably well-functioning economy (please, Bernie bros, no hatemail), we have credit expansion that is about 2.5x the size of growth.  China, on the other hand, sees credit expansion roughly 6.5x the size of growth.
                        </div>}
                    >
                    All of these numbers seem to align extremely well:  US debt/GDP is rougly 100%, while China's debt/gdp is roughly 250-350% depending on what you count.  <Link href="/china_real_estate">Chinese real estate</Link> is also roughly 2-3x overvalued, and credit expansion in China is roughly 2-3x faster than in the US.

                    <Image widthOverride="500px" src="https://i.imgur.com/FjFmvgp.gif" />

                    <br/><br/> Long gone are the days where the People's Republic of China uses a command-and-control economy.  Yet, through capital controls, China can effectively control the <Link href="https://www.scmp.com/economy/china-economy/article/3012312/chinas-capital-outflow-controls-have-gone-extreme-former">economic interface of its citizens</Link>:  as long as citizens remain in China and keep playing Chinese Economy The Game, everything seems normal.
                    But as soon as they try to redeem their RMB for foreign currency, there are problems:  first, there's a $50,000 USD cap on redemption.  Second, China has to deplete their foreign currency reserves every time a citizen makes a currency sale.  If a citizen wants to exchange RMB for USD, the government must actually go out and exchange RMB for USD, buying USD on behalf of their citizen and selling RMB, thereby increasing the total global supply of RMB and (slightly) devaluing the currency.
                    <br/><br/>Without capital controls, if <u>just 100 million citizens withdrew $15,000 USD per year over two years</u> the foreign currency reserves would be completely depleted.  This might seem like an almost trivial task:  the average household net worth in China is worth roughly $23,000 USD, so the richest 10% of China (at least 100m people) could easily afford this.  However <Link href="https://www.scmp.com/business/banking-finance/article/3008795/chinese-banks-quietly-lower-daily-limit-foreign-currency">capital controls are actually much tighter than the headline $50,000 USD, with exchange scrutiny starting as low as $3,000 USD</Link>, 
                    <Image widthOverride="500px" href="https://tagn.files.wordpress.com/2010/04/simpsons_i-and-s_money.jpg" />

                    <br/><br/> If the PRC is able to control the economic interface of its citizens what's the trigger to a crash?  If banks never demand repayment and unprofitable businesses are permitted to persist, what could trigger
                    a recession?
                    The one factor that the government may no longer be able to control:  its currency exchange rate.
                    <br/><br/>Imagine a country's currency as vouchers, good for alleviating one unit of taxable liability, or perhaps for some government service. "You will pay us 30% of your salary in the currency that we issue. And we have guns."
                    <br/><br/> In a near-future dystopian late-stage capitalism scenario, one could imagine Amazon setting up an alternative viable currency in Venezuela, and its citizens would grudgingly work for Bezos and be paid in JeffBucks (<Link href="https://www.businessinsider.com/new-york-governor-jokes-amazon-cuomo-name-change-hq2-2018-11">Andrew Cuomo</Link> could be the colonial governor.  If this seems farfetched, never forget that <Link href="https://en.wikipedia.org/wiki/Banana_republic">fruit companies used to control ruling juntas</Link>). <br/><br/>
                    We can take the Hobbesian perspective on currency and government:  the inherent value of a dollar or a reminbi is not  "faith" or "mutual agreement", as bitcoin <Link href="https://en.wikipedia.org/wiki/Hodl">hodlers</Link> and gold bugs would have you believe, but the fact that it literally represents the alleviation of a taxable unit issued by a coercive entity with a <Link href="https://en.wikipedia.org/wiki/Monopoly_on_violence">monopoly on violence</Link>.
                    In this sense, we are all in fact part-time government employees:  behind every currency is a giant <Link href="https://en.wikipedia.org/wiki/Fold_(higher-order_function)">reducing function</Link> that represents the relative demand for a country's exports against its supply of currency.

                    <br/><br/>
                    There is an idea in economics known as the Impossible Trinity, which states that it is impossible to have all three of the following at the same time:
                    <ul>
                        <li>a <u>fixed</u> foreign exchange rate</li>
                        <li><u>free</u> capital movement (absence of capital controls)</li>
                        <li>an <u>independent</u> monetary policy (i.e., name your own interest rate)</li>
                    </ul>
                    <Image widthOverride="500px" href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Impossible_trinity_diagram.svg/700px-Impossible_trinity_diagram.svg.png" />
                    The explanation of why is as follows, from Wikipedia:
                    <p>Assume that world interest rate is at 5%. If the home central bank tries to set domestic interest rate at a rate lower than 5%, for example at 2%, there will be a depreciation pressure on the home currency, because investors would want to sell their low yielding domestic currency and buy higher yielding foreign currency. If the central bank also wants to have free capital flows, the only way the central bank could prevent depreciation of the home currency is to sell its foreign currency reserves. Since foreign currency reserves of a central bank are limited, once the reserves are depleted, the domestic currency will depreciate.</p>
                    <br/> The United States, of course, has chosen options 2 and 3: it allows for free capital movement, and an independent monetary policy (i.e., it can set its interest rate at wherever it chooses).  As such, investors might pursue better risk-return opportunities elsewhere, selling USD for internationally denominated currency and thereby depreciating the USD.
                    <br/> China on the other hand has chosen to pursue #1 and #3:  exchange rates are effectively fixed, their monetary policy remains independent, and as such, their citizens are cannot move significant money abroad, as every foreign currency exchange will deplete China's forex reserves. While Chinese citizens remain limited in their international capital flight rights, foreign companies
                    can still repatriate RMB profits (for now), and every RMB repatriated is another blow to the exchange rate.  If both households and firms are able to move another 10% of their money supply overseas, Chinese foreign exchange reserves would deplete and the RMB would no longer be "fixed", but enter "maxi-devaluation". 
                    <br/><br/>
                    Below, China's foreign exchange reserves, in millions USD (i.e., China has roughly $3trn USD in foreign exchange reserves).
                    <iframe src='https://d3fy651gv2fhd3.cloudfront.net/embed/?s=chinaforexcres&v=201912091124V20191105&d1=20100109&h=300&w=600' height='250' width='550'  frameborder='0' scrolling='no'></iframe>
                    <br/>
                    Imagine the absurdity of being a billionaire in China. You have all the funny-money you could ask for.  You can buy anything available for sale to you, as long as it's denominated in RMB:  a Gucci bag here, a Bugatti there, a <Link href="https://www.insidehook.com/article/architecture-real-estate/mansion-on-private-island-in-china-listed-for-154-million">mansion on a private island</Link>.
                    Yet you can barely transfer enough funds abroad for a decent ultra-luxury vacation. Buying a Parisian apartment or New York pied-a-terre would be seen as money-laundering, and likely lead to your imprisonment.  You look longingly northward to your Russian oligarch colleagues with envy, and the only thing you think about, day and night, is "how the fuck do I get my money out of here?"
                    <br/><br/>
                    The crux of China's control of their economy, then, is the size of their foreign currency reserves, and the cost of maintaining those reserves is the daily lived experience of its citizens being unable to purchase or invest abroad.  As foreign companies successfully expatriate RMB profits to USD, foreign currency reserves should deplete over time.  Watch China's forex reserves carefully -- once depleted the RMB will be forced into a devaluation spiral, and the world will taste the tears of Chinese billionaires.
                    </Paywall>
        </div>)
    }
}

export default China_2;