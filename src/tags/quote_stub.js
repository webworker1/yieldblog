import React from 'react';

const QuoteStub = ({quotedText, quotedTitle}) => {
    return(
        <div>
        <hr/>
        <i class="fas fa-quote-left fa-2x fa-pull-left"></i>
            <b>{quotedTitle}</b><br/>
            <i>
                {quotedText}
            </i>
        <hr/>
        </div>
    )
}

export default QuoteStub;