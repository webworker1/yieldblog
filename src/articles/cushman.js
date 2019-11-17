

import React from 'react';
import Image from '../tags/img';

class Cushman extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    One of my in-laws is bigwig at Cushman & Wakefield.  He is a man fond of bombastic 80s-finance-type pronouncements such
                    as <i>"It's easier to make another $200k than to say no to your wife"</i> and <i>"If someone asks me out to breakfast and suggests 9 am, then he's a <i>chump</i>.  My workday starts at 6:30 am, let's meet at 6:30." </i> 
                     As a chump who gets out of bed no earlier than 9 am, I've frequently wondered about the industry and culture that could produce such a man. Well, wonder no more: Cushman & Wakefield is now public.
                    Their P&L, below, shows that despite starting the workday at 6:30am, Cushman & Wakefield generates effectively $0 of operating profit and manages to lose between $185m and $400m annually.
                    <Image src="https://i.imgur.com/eFUrmcl.png" />
                    Yeesh.  That's not good.  Maybe Mr. Big Mean GAAP accounting is hiding their true profitability?
                    <Image src="https://i.imgur.com/nHxrC7I.png" />
                    Nope!  Cushman & Wakefield manages to lose cash every year.  What really stood out to me was the ratio of market cap to employees. <b>How is a company with 51,000 employees only valued at $4bn? </b>
                    <br/> On its face this seems totally abysmal so of course I had to look around:
                    <Image src="https://i.imgur.com/QOmbztZ.png" />
                    Truly amazing. The average Cushman & Wakefield employee creates only $80,000 of value for the firm, compared to an average WalMart employee at $155,000 or an average Google employee at $8.7m.
                    Turns out those delicious free lunches are the least Google can provide.
                    If I were more of a populist (or writing a Medium post, same difference), I might create a chart like the following one:
                    <Image src="https://i.imgur.com/xQDHMyC.png" />
                    But I'm not.  And this sort of chart is actually bad analysis: no one pays their employees more than they have to, and both JLL and Cushman both can't be doing that.  What Cushman & Wakefield really teaches us
                    is that there are just some industries where creating revenue requires daily "rainmaking": waking up at 5 am to get into those 6:30 non-chump meetings,
                    and that these industries happen to have an employee base that can easily jump ship, revenue included, to a competing firm. <br/>
                    Google employees, on the other hand, are continually investing their time in creating an ever-wider moat: there's no need to get in at 6:30 when
                    the existing business already pays the bills. At the same time, it's not really an individual engineer at Google who contributes to earnings power, rather, it's the combined
                    effort of teams of engineers:  losing engineers does not immediately equate to losing revenue, as it might for Cushman.  The "Highly Skilled Worker Zone" should perhaps be renamed to
                    the "Extraordinary Franchise with Extraordinary People Zone": no one individually uses Amazon, AT&T, or Facebook because of a specific engineer, but they absolutely might shift loyalties for a specific
                    commercial real estate dealmaker. 
                    <hr />
                    <b> Lessons Learned </b> <br />
                    1. Commercial real-estate services is a profoundly shareholder-unfriendly industry. <br/>
                    2. Avoid industries that require "revenue rainmakers": effort spent making enough revenue to cover payroll forces companies into a situation where they need to "overpay" their biggest rainmakers, thereby creating the "overpaid asshole" phenomenon.<br />
                    3. There's a reason why there aren't any publicly traded law practices and why medical practices frequently sell for only 3x earnings: it's very hard to exploit a rainmaker.<br />
                    4. As with the case of Google's incredibly high market-cap per employee: there truly is no such thing as a free lunch.<br />
                    5. I mean, the Cushman guys are still, in aggregate, overpaid assholes:  why would you ever own a stock that's generating $0 of profit that <i> isn't</i> creating software-as-a-service?  The biggest risk I see to a short is acquisition risk: private equity guys acquire Cushman because they have a gameplan on how to generate the same revenue with 10,000 fewer employees.
                    <hr /><b> Final Grade: C- </b> (Possible short candidate, proceed at your own peril)
                </div>)
    }
}

export default Cushman;