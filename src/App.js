import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import About from './articles/about';
import Aramco from './articles/aramco_1';
import ChinaRealEstate from './articles/china_real_estate';
import Charleston from './articles/charleston';
import StarMetals from './articles/star_metals';
import Transdigm from './articles/transdigm';
import Cushman from './articles/cushman';
import Landing from './components/Landing';
import PageWrapper from './components/PageWapper';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about">
            <PageWrapper>
              <About />
            </PageWrapper>
          </Route>
          <Route path="/aramco">
            <PageWrapper title="Saudi Aramco: Vanity IPO of the 100-Year Kingdom">
              <Aramco />
            </PageWrapper>
          </Route>
          <Route path="/china_real_estate">
            <PageWrapper title="China Questions, Part I: How Overvalued is the Chinese Real Estate Market?">
              <ChinaRealEstate />
            </PageWrapper>
          </Route>
          <Route path="/charleston">
            <PageWrapper title="The Great Highway Robbery of Charleston, SC">
              <Charleston />
            </PageWrapper>
          </Route>
          <Route path="/star_metals">
            <PageWrapper title="Ripped off in Atlanta: Star Metals Crowdstreet Deal">
              <StarMetals />
            </PageWrapper>
          </Route>
          <Route path="/transdigm">
            <PageWrapper title="Transdigm Bonds are a Cleveland Dreamboat">
              <Transdigm />
            </PageWrapper>
          </Route>
          <Route path="/cushman">
            <PageWrapper title="Cushman & Wakefield: How do 51,000 employees create so little value?">
              <Cushman />
            </PageWrapper>
          </Route>

        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
