import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


// ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))