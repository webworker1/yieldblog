import React from 'react';
import Image from '../tags/img';
import Link from '../tags/link';
import QuoteStub from '../tags/quote_stub';

class StarMetals extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    Generally speaking, when you need financing, you pay interest or equity upside in the future in exchange
                    for capital today.  If you are able to achieve some kind of Adam Neumann-esque hat-trick and get
                    <i> paid </i> to borrow money, you are more or less a genius.  Enter CrowdStreet, a crowdfunding platform
                    that has made geniuses of the otherwise mediocre.  Yield-starved main street investors facing mediocre bond and equity yields will find their investing loins aflame when they see the headline 15% IRR / 2.5x equity multiple offered by Star Metals.
                    I show that <u>the majority of Sponsor returns come from investor fees</u>, and that this deal is fairly low reward and fairly high risk for investors.
                    Let's dive in! <br/>
                    <QuoteStub quotedText="Star Metals Office has been thoughtfully designed to be a Class A+ creative office tower to take advantage of its proximity to Midtown while also appealing to the technology, advertising, media and information sectors that are more drawn to creative office buildings. To kick-off the Project, the Sponsor has executed a 56,000 square foot pre-lease with Spaces (26% of Office SF), a leading co-working group owned by Regus (IWG) that exemplifies the entrepreneurial and creative spirit of the Project. The Sponsor intends to keep this leasing momentum going in a market that has seen recent corporate expansion or relocation from companies including Blackrock, Starbucks, Honeywell, Square, Norfolk Southern, Anthem, Salesforce, ThyssenKrupp, Google and Zillow. The Project is projected to deliver over a 7.4% return on cost providing an opportunity to achieve double digit annual cash on cash returns with moderate leverage. Projected rents could decline by ~20% and still achieve a comparable return on cost to purchasing a stabilized asset based on current market pricing. Star Metals Office is part of the Sponsor’s larger Star Metals District which will have over 1,600 people who live and work there on a daily basis and over 45,000 hotel guests annually. By combining a complementary mix of uses in a pedestrian friendly environment, each Star Metals project will have an inherent competitive advantage over other new developments." />
                    These fundamentals seem great: Class A office buildings require large, price-insensitive corporations and Salesforce has a <Link href="https://en.wikipedia.org/wiki/Salesforce_Tower">real penchant for real estate</Link>. <br/>
                    Comparables provided by the sponsor:
                    <Image src="https://crowdstreet-prod.s3.amazonaws.com/media/property-images/rent_comps_2-1576275647357.png"/>
                    The comps that the sponsor provides are extremely questionable at best.  First, these comparables are <u>asking prices</u> for "Under Construction" buildings, rather than existing rental prices for existing buildings.  Additionally, while the Atlanta market <Link href="https://www.loopnet.com/georgia/atlanta_office-space-for-lease/?sort=16:1"> does in fact just barely support $42 per square foot annual rents</Link>, they are for areas of midtown Atlanta that look like this ($42-$50/sq ft):
                    <Image href="https://i.imgur.com/eDH0gYN.png" />
                    not like this ($32/sq ft) <Image href="https://i.imgur.com/5bbrmHt.png" /> <Link href="https://www.google.com/maps/@33.7835178,-84.4118209,3a,75y,62.43h,90t/data=!3m7!1e1!3m5!1sT5d-3DoDm5XDbdhPQ7E0Og!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3DT5d-3DoDm5XDbdhPQ7E0Og%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D57.86185%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192">this</Link> or this (all images of the Star Metals Office location) <Image href="https://i.imgur.com/vvKIujj.png" />.
                    The stacking plan, below, helps inform our model. <br/> <Image href="https://crowdstreet-prod.s3.amazonaws.com/media/property-images/stacking-1576275686227.png" />
                    Green text means the floor has already been fully leased, red text means the floor has yet to be leased. Below is the "Sponsor Case", which assumes $50/sq ft, which is obviously unrealistic, but shows how we get to the batshit-crazy 15% IRRs that are being advertised. 
                    <Image href="https://i.imgur.com/aRQWrpt.png" />
                    <Image href="https://i.imgur.com/2k2Yghv.png" />
                    <Image href="https://i.imgur.com/U3xTAlI.png" />
                    Interest expense eats more than 50% of project's operating income, leaving just $5m of operating income from $11.8m pre-interest operating income. This wouldn't be such a bad thing, but let's see what happens when price per square foot gets cut even just a little bit, to a still-aggressive "Upside" case of $42/sq ft:
                    <Image href="https://i.imgur.com/CH6HwV0.png" />
                    Uh oh -- net operating income has fallen to $3.4m from $5m.
                    <Image href="https://i.imgur.com/9KQJHOG.png" />
                    On a post-fee basis, investor returns are now only 40% over 7 years, equating to roughly 5% annualized. What's worse, the Sponsor's returns are still quite high: while you have a 1.4x equity multiple over 7 years, the Sponsor, from fees, is still earning a 2.4x equity multiple.  Unadjusted for the investor-to-sponsor wealth transfer, you both would've earned a 1.7x equity multiple. <br/>
                    It gets worse: what happens when we using <u> existing rental comps </u> for the actual Atlanta market?  I.e., rental rates we know the market will support that we can be confident in?  This is where things get really interesting:
                    <Image href="https://i.imgur.com/7duKGFO.png" />
                    Holy crap, the "guaranteed case" scenario only has us doing <b>$900k</b> of operating income net of interest expense.
                    <Image href="https://i.imgur.com/iSnuXjz.png" />
                    Sponsors, on the other hand, are still made whole, <u>primarily through fees collected from investors</u>. Sponsors will literally <u> earn nearly as much money from fees (~$600k/year) than the property generates in net operating income </u>.
                    <Image href="https://i.imgur.com/XJujHNq.png" />
                    In summary, the "safe case" for this deal is truly awful:  I estimate that investors will see a -15% IRR, getting back about 40% of their investment in a "safe-case" scenario in 7 years, and gaining about 40% of their money in a very positive outcome.
                </div>)
    }
}

export default StarMetals;