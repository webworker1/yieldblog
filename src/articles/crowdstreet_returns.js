

import React from 'react';
import { Link } from "react-router-dom";
import Image from '../tags/img';

class CrowdstreetReturns extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    <Image src="https://i.imgur.com/GBj4rP6.png" />
                    <div> Wow, 25.5% XIRR! Wait a minute... First of all, it's 25.5% for <b>realized</b> returns. </div>
                    <div> How many deals have been realized? 17. </div>
                    <div> How many deals have there been total?  361. <br /> Somehow, Crowdstreet thought that advertising that 4.7% of their deals have been realized would be a good idea.
                    That's actually lower than the <a target="_blank"  href="http://www.ncaa.org/about/resources/research/estimated-probability-competing-professional-athletics"> chance that an NCAA baseball player goes pro</a>.
                    </div>
                    <div> Also, good lord, only $74m of investor distributions on $807m of capital raised?
                        How is it that in 5 years, Crowdstreet has managed to return less than 10% of the capital it has raised?
                        Even if you assume $600m of the $807m was raised in a "late vintage" fund, returning only $74m on $200m in 4-5 years is absolutely abysmal, considering that we should already be seeing many exits. <br/>
                        See our next story: <a onClick={() => this.props.toggleCharleston()}> "The Great Highway Robbery of Charleston, SC" </a>
                    </div>
                </div>)

    }
}

export default CrowdstreetReturns;