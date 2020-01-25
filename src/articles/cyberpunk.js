import React from 'react';
import Image from '../tags/img';
import Link from '../tags/link';


class Cyberpunk extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="article-wrapper">
                    <br/>Developing a new AAA video game franchise reminds me a lot of building a cathedral for a new religion: most people will visit beautiful cathedrals, no matter their faith, but retaining worshippers and devotees requires creating a deep and abiding belief in the system at hand.
                    GTA V famously cost $265m to develop, while recently-constructed LA cathedral <Link href="https://en.wikipedia.org/wiki/Cathedral_of_Our_Lady_of_the_Angels_(Los_Angeles)">Cathedral of Our Lady of the Angels</Link> cost a mere $250m.
                    <br/><br/>CD Projekt Red has a history of building cathedrals to existing religions, with their <Link href="https://en.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt">Witcher</Link> game series based on Andrzej Sapkowski's books of the same name.
                    CD Projekt Red's newest series, <Link href="https://amzn.to/36sBU7j">Cyberpunk 2077</Link> continues their tradition of finding barely-known source material and building
                    a much more famous game from it -- in this case drawing on a little-known tabletop RPG, <Link href="https://talsorianstore.com/collections/cyberpunk/products/cyberpunk-2020">Cyberpunk</Link>, and more generally drawing on a universe first envisioned by the extraordinary William Gibson
                    in <Link href="https://www.amazon.com/gp/product/0441569595/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=theyieldblog-20&creative=9325&linkCode=as2&creativeASIN=0441569595&linkId=3cc5191340fa10f1637a4a7934700f60">Neuromancer</Link> and Sprawl trilogy.
                    Before we go any farther, if you don't know what Cyberpunk 2077 is, watch this gameplay trailer.  After you've had your fill (or, if you're like me, picked your jaw off the floor and cleaned off your pants), keep reading.
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vjF9GgrY9c0?start=869" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/>
                    Sadly, William Gibson is not onboard the Cyberpunk 2077 hype train, bitterly describing the game as <Link href="https://www.pcgamer.com/william-gibson-doesnt-think-cyberpunk-2077-is-cyberpunk-enough/">"generic"</Link>. A one-word dismissal coming from the godfather of cyberpunk, a man who invented an entire psychosphere, "generic" is the absolute worst insult I can imagine.

                    Fortunately for CD Projekt Red, <Link href="https://www.google.com/search?safe=off&tbm=fin&sxsrf=ACYBGNRxnsuOMw1GUOpCxs81QEjWsQNynw%3A1579970600552&ei=KHAsXvmZIYPr5gKl7IfQAQ&stick=H4sIAAAAAAAAAONgecRozi3w8sc9YSm9SWtOXmPU4OIKzsgvd80rySypFJLiYoOyBKT4uHj00_UNCyqKDI1TCi15AAMr0I48AAAA&q=WSE%3A+CDR&oq=cd+proj&gs_l=finance-immersive.1.0.81l3.654.1341.0.2872.9.9.0.0.0.0.140.663.5j2.7.0....0...1c.1.64.finance-immersive..2.7.661.0...0.n_yUrORylJM">the market entirely disagrees</Link>, having already valued the company at 26.5 billion PLN ($6.8bn USD) -- that's a lot of fucking złoty.
                    Remember, Mojang, creator of the  <Link href="https://en.wikipedia.org/wiki/List_of_best-selling_video_games">best-selling video game of all time</Link>, Minecraft, was sold for only $2.5bn USD.
                    I was curious to see what assumptions it takes to earn enough cash to justify this valuation, so I started plugging in some numbers to a wild-ass-guess of a model:
                    <Image href="https://i.imgur.com/ZDalteC.gif" />
                    If we assume that Cyberpunk goes on to one of the best-selling games of all time, selling 70m units, and then sells a sequel that performs similarly, we will see total cash earned of around 18bn PLN.  Does that mean that CD Projekt Red is overvalued? Not necessarily:  if CD Projekt Red can create another piece of compelling IP by 2026, they can easily maintain the "stub" valuation -- roughly speaking, 26bn PLN less the 18bn PLN that will be sitting on the balance sheet.

                    However, for CD Projekt Red's stock to be a slam-dunk buy, Cyberpunk 2077 will need to become the next GTA V, <u>twice</u>:
                    <Image href="https://i.imgur.com/MxV4KIF.gif" />
                    Is this even possible? If we look at the install base of total active gaming devices...maybe:
                    <Image widthOverride="200px" href="https://i.imgur.com/LQ61HZr.gif" />
                    If we look at Steam hardware statistics, we see that surprisingly, <u>most machines can play Cyberpunk 2077's 960 GTX requirement</u>:
                    <Image widthOverride="300px" href="https://i.imgur.com/SpzKpuP.gif" />
                    <br/>Here's the TLDR:
                    <br/>1. CD Projekt Red needs to start working on its next IP <u>today</u>, so that it's ready by the time Cyberpunk 2077 IP is exhausted.  Given how little it spends in development (merely $100m USD a year), and given how much money Cyberpunk is expected to earn, this should be no problem at all, especially given their $200m USD of cash on the balance sheet.
                    <br/>2. The market is already pricing in Cyberpunk 2077 and its sequel to be one of the most successful games of all time.  
                    <br/>3. #1 and #2 are possible and credible:  we have the install base, we have the technology.  


                </div>)
    }
}

export default Cyberpunk;