

import React from 'react';
import QuoteStub from '../tags/quote_stub';
import Image from '../tags/img';
import Link from '../tags/link';


import { PayPalButton } from "react-paypal-button-v2";
 
class Subscription extends React.Component {


    render() {

        return (
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="5LACY4R5CHHPJ" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>            
        );
  }
}

export default Subscription;