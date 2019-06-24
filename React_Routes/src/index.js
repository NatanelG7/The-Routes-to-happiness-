import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Guilty from './components/Guilty'
import Happy from './components/Happy'
import Sleepy from './components/Sleepy'

const Home = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/guilty">Guilty</Link>
        </li>
        <li>
          <Link to="/happy">Happy</Link>
        </li>
        <li>
          <Link to="/sleepy">Sleepy</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/"/>
      <Route path="/guilty" component={Guilty} />
      <Route path="/happy" component={Happy} />
      <Route path="/sleepy" component={Sleepy} />
    </div>
  </Router>
);


ReactDOM.render( <Home/>, document.getElementById('root') );
