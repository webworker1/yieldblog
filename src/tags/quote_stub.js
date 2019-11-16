import React from 'react';

const QuoteStub = ({quotedText, quotedTitle}) => {
    return(
        <div>
        <hr/>
            <b>{quotedTitle}</b><br/>
            <i>
                {quotedText}
            </i>
        <hr/>
        </div>
    )
}

export default QuoteStub;