import React from 'react';
import Image from '../tags/img';


class Charleston extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    As a kid, I was fascinated by the idea that hotels could get away with charging so much. How could they charge my father $200 a night for a room, when our mortgage was only $800 and my father barely made $200 a day?
                    The hotel gameplan seemed simple: find a shady part of town with a <a target="_blank" href="https://www.google.com/maps/place/61+State+St,+Charleston,+SC+29401/@32.7802684,-79.9307113,17z/data=!3m1!4b1!4m5!3m4!1s0x88fe7a0dc4e91381:0xf2c1d866988160d4!8m2!3d32.7802684!4d-79.9285226"> failing sushi restaurant</a>,
                    tear it down, and build a luxury hotel. <a target="_blank" href="https://app.crowdstreet.com/properties/61-state-street/"> This deal at 61 State Street </a>struck a nerve for me: advertising nearly 8% cash yields and a 17% IRR, I stared at this listing and wondered if I, had circumstances been different, could've been a young JW Marriott, were it not for my $200/day upbringing.
                    <br />
                    Deal projections seemed to good to be true:
                    <hr />
                    <b> Business Plan </b>
                    <i> The Sponsor has underwritten approximately $30.8M ($616k per key) in total development costs and a 17-month construction period with an anticipated completion date of November 2020. Upon opening the hotel, SSI has projected a $393.58 average daily rate (ADR) and 58.6% occupancy, for the first 4 months resulting in a $230.64 revenue per available room (RevPAR). The ramp up continues over the next 8 months, with year 1 average occupancy of 74.2%. The Sponsor is projecting to increase the average daily rate by 2.0% annually and raise occupancy to a stabilized rate of 82.0% by 2022. SSI is targeting a sale of the Project in November 2023, which is approximately a 4-year hold from the offering. The Sponsor expects to sell the Hotel for approximately $45,000,000, which equates to a 6.5% exit cap rate on trailing twelve-month NOI. If the asset performs according to proforma, the investment generates an investor-level annualized <b> XIRR of 17.4% and an equity multiple of 1.9x. </b> </i>
                    <hr />
                    <br />
                    They might as well have written: "Business Plan: The Sponsor intends to make it rain, and this hotel will go to the mooooooooon".  Let's review how insane this plan is:
                    <br />
                    1. The sponsor believes they can build an entire hotel in one year. As I write this, it's currently November 2019, and they anticipate "completion" by November 2020, despite having yet to raise funds to do so.  How exactly 12 months in the future is 17 months is beyond me.
                    <br />
                    2. Charging $393 per night is completely, utterly batshit insane. As you can see below, typical high-end rooms in Charleston's French Quarter, <i> even during winter vacation </i> run only $270-$300/night, with the highest-end boutique hotel, the Spectator, charging around $350/night.
                    Let's assume they can somehow get $300/night, even in the off-season, despite evidence to the contrary:
                    <Image src="https://i.imgur.com/bk17F1m.png" />
                    3. 82% final run-rate occupancy is mildly egregious:  this assumes basically 100% bookings Thursday - Sundays, and 60% bookings Monday-Wednesday.  Across Charleston, room occupancy rates are only around 72-75%. <br />
                    This brings us to a total return over 5 years of around 129%, which includes a cash yield of 8.5%.  <b>Wait: why are our modeled returns higher than the ones advertised?  Something doesn't smell right. </b>
                    <Image src="https://i.imgur.com/EJ6TKV3.png" />
                    <br/> <br/> <br/>
                    Oh wait, oh no, this deal is terrible:
                    <hr/>
                    <Image src="https://i.imgur.com/7yPhuc4.png" />
                    <hr/>
                    <br/>
                    <b> This is the fine print version of highway robbery </b> <br/>
                    What happens when there aren't enough investors?  The existing Hotel Investors are still on the hook for all those fees!
                    Imagine if only one 80-year old retiree put her $300,000 savings in this project. By the end of the first year, all of her equity would be eliminated by fees.
                    Below: modeling out investor returns, using only assumptions provided by the private equity Sponsor:
                    <Image src="https://i.imgur.com/6wOsgeS.png" />
                    It's so bad that only in the case where we assume batshit high room rates, and full investor participation, do we get the 90%+ returns presented by the sponsor.  If only half
                        of all investors participate, returns get cut to 0%.
                    <Image src="https://miro.medium.com/max/3840/1*J5QtUhvrdCieEaStKpS17g.jpeg" />
                    <b> Above, an actual image of 61 State Street investors, waiting for each other to jump. </b>
                    If we assume realistic room rates ($300/night, 75% occupancy), we expect between <b> -100% and -13% returns </b>
                    <Image src="https://i.imgur.com/sANvHkY.png" />
                    <br /> 
                    As for my message to SSI, the private equity sponsors:
                    <Image src="https://media.giphy.com/media/Ob7p7lDT99cd2/giphy.gif" />
                    <br/>
                    Shame on you for ripping off mainstreet investors who are just trying to retire early.
                    <br /> 
                    <hr /> <br/>
                    <b> Lessons Learned </b> <br />
                    1. Sponsors will use crowdfunding platforms to enrich themselves and enhance their own returns. <br />
                    2. Always carefully calculate how sponsor fees will affect your returns, especially if it's on a fixed rather than pro-rata basis. <br />
                    3. Question sponsor assumptions: never take a single number for granted, as it can wildly change the investment outcome. <br />
                    <b> Final Grade: F- </b> <hr />
                    <Image src="https://media.giphy.com/media/15BuyagtKucHm/giphy.gif" />
                    </div>
                )

    }
}

export default Charleston;