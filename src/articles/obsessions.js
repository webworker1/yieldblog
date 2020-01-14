import React from 'react';
import Image from '../tags/img';

class Books extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    Below are some publications I'm currently reading, as well as a handful of products that I've found super useful.  Support the blog, but more importantly, improve your own life greatly:
                    <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=theyieldblog-20&marketplace=amazon&region=US&placement=B001U5SPJW&asins=B001U5SPJW&linkId=8bb8d52c32ae9db22ffb4b6a8bffdb30&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>
                    I read my first New Yorker article when I was 18 while waiting for a campus tour at the Harvard admissions office. I couldn't understand half the references in the articles I read, and I was totally hooked.
                    It's unfortunate that the magazine is associated with a kind of East coast elite parochialism.  It's very easy to make fun of: there's a sort of fussy sensibility.  They use diareses.  Their cultural criticism always relies on a rich substrate of pre-existing understanding.  For me the publication is something
                    close to a pursuit of <Link href="https://en.wikipedia.org/wiki/Eudaimonia">eudaimonia</Link> or <Link href="https://en.wikipedia.org/wiki/Arete">arete</Link>.  The key, the trick to reading The New Yorker is to pay close attention to their open longform pieces, which are typically 20,000 words.  Staff writers are generally only expected to write 80,000 words a year, so each longform piece typically represents 1-3 months of work for a journalist.
                    While your typical New York Times journalist is hurriedly eating her sad salad desk lunch and writing another middlebrow liberal hand-wringer, I imagine the typical New Yorker staff writer as having cocktails with their sources at the Raines Law Room. (They still eat sad salad desk lunches.  We all do.)

                    <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=theyieldblog-20&marketplace=amazon&region=US&placement=0262536161&asins=0262536161&linkId=bbf81404470044f9d07b6052a3e8f2a8&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>
                    While the New Yorker is almost universally enjoyable given the right article, Vaclav Smil's book, Energy and Civilization, is very much for only the most degenerate Yield Blog readers.  If you're reflexively, incurably curious and focused on first-principles understanding, Energy and Civilization will be deeply rewarding.  Vaclav Smil is sort of like the anti-Malcolm Gladwell.  
                </div>)
    }
}

export default Books;