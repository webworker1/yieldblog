import React from 'react';

const QuoteStub = ({quotedText, text, quotedTitle}) => {
    return(
        <div>
        <hr/>
        <i className="fas fa-quote-left fa-2x fa-pull-left"></i>
            <b>{quotedTitle}</b><br/>
            <i>
                {quotedText || text}
            </i>
        <hr/>
        </div>
    )
}

export default QuoteStub;