
import React from 'react';
import Image from '../tags/img';
import Link from '../tags/link';
import QuoteStub from '../tags/quote_stub';

class LBrands extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    <br/>Modern China reminds me a little bit of <Link href="https://www.amazon.com/dp/B00JTYQJ3K/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1">Brave New World</Link>, in its benevolent indirect economic totalitarianism, its self-enforced educational castes, its secularness, and its citizens intense preference for conspicuous consumption. Plus, who can forget the <Link href="https://www.newyorker.com/magazine/2017/06/26/chinas-mistress-dispellers">polyamory</Link>.
                     Like Brave New World, economic activity in China always struck me as a little bit circular -- aggressive local government growth targets, aggressive subsidies in strategic industries, extensive regulatory bureaucracy, and of course, ghost cities.  Where in all this frenzy of activity would we see real productivity and GDP growth?
                    <br/><br/>Apparently, in very few places: <Link href="https://www.merics.org/sites/default/files/2018-05/191017_merics_ChinaMonitor_42.pdf">In an incredible paper from Merics China Monitor</Link>, UCSD professor Victor Shih shows that the Chinese economy does not come remotely close to earning its cost of capital: <u>interest is actually growing faster than GDP</u>, by a LOT.  
                    Let me repeat that in larger font: <b><h2> Interest grows faster than GDP in China </h2></b>Interest service on credit was 17trn RMB in 2017 while incremental nominal GDP was only 7trn RMB.  Marginal growth in the Chinese economy could actually be considered a Ponzi scheme:
                    <Image widthOverride="500px" src="https://i.imgur.com/ZFc1caD.png" />
                    A large portion of incremental interest growth seems to be getting rolled over: total credit grew by 52trn RMB, growing at 34% YoY despite only a 6% GDP growth rate.
                    This effectively makes the Chinese economy a Ponzi scheme: State-owned enterprises owe loans that can never get repaid, and State-owned banks continually amend and extend non-performing loans (NPLs).
                    Since there never comes a "judgment day" where a self-interested third-party demands repayment, the entire cycle of borrowing at high rates and investing at a low return continues indefinitely.  This inability of banks to recognize nonperforming loans is what most gives China its Brave New World quality: with muted market signals it's impossible to tell if you're building a bridge to nowhere.
                    The Chinese government is paying people with its own paper, and recording debts, which are also denominated in its own paper.
                    <Image widthOverride="500px" src="https://i.imgur.com/Y96BtKj.png" />
                    <br/>
                    Of course, we have to compare this to a known economy:
                    <Image widthOverride="500px" src="https://i.imgur.com/FjFmvgp.gif" />
                    The US economy grows at roughly 2%, while total credit grew by roughly 5.3%.  So, for a reasonably well-functioning economy (please, Bernie bros, no hatemail), we have credit expansion that is about 2.5x the size of growth.  China, on the other hand, sees credit expansion roughly 6.5x the size of growth.
                    All of these numbers seem to align extremely well:  US debt/GDP is rougly 100%, while China's debt/gdp is roughly 250-350% depending on what you count.  <Link href="/china_real_estate">Chinese real estate</Link> is also roughly 2-3x overvalued, and credit expansion in China is roughly 2-3x faster than in the US.
                    <br/><br/> But if the PRC is able to <Link href="https://www.scmp.com/economy/china-economy/article/3012312/chinas-capital-outflow-controls-have-gone-extreme-former">effectively control the economic lives of its citizens</Link>, what's the trigger to a crash?  If banks never demand repayment and unprofitable businesses are permitted to persist, what could trigger
                    a recession?
                    The one thing that the government may no longer be able to control:  its currency exchange rate.
                    <br/><br/>A different, perhaps heterodox way of thinking about this is to imagine a country's currency as prize tickets, good for alleviating one unit of taxable liability, or perhaps for some government service. "You will pay us 30% of your salary in the currency that we issue. And we have guns."
                    <br/><br/> In a friendlier and less coercive context, one could imagine Amazon setting up an alternative viable currency in Venezuela, and its citizens would be thrilled to work for Bezos and be paid in JeffBucks.<br/><br/>
                    The inherent value of a dollar or a reminbi is not  "faith" or "mutual agreement", as bitcoin and gold bugs would have you believe, but the fact that it literally represents the alleviation of a taxable unit issued by a coercive entity with a <Link href="https://en.wikipedia.org/wiki/Monopoly_on_violence">monopoly on violence</Link>.
                    In this sense, we are all in fact part-time government employees:  behind every currency is a giant <Link href="https://en.wikipedia.org/wiki/Fold_(higher-order_function)">reducing function</Link> that represents the relative demand for a country's exports against its supply of currency.

                    The release valve to all this, of course is currency.
                    Below, China's foreign exchange reserves, in millions USD (i.e., China has roughly $3trn USD in foreign exchange reserves).
                    <iframe src='https://d3fy651gv2fhd3.cloudfront.net/embed/?s=chinaforexcres&v=201912091124V20191105&d1=20100109&h=300&w=600' height='200' width='600'  frameborder='0' scrolling='no'></iframe>
        </div>)
    }
}

export default LBrands;