import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

import { BrowserRouter, Route, Link } from "react-router-dom";

class Home extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Happy" component={Happy} />
          <Route path="/Sleepy" component={Sleepy} />
          <Route path="/Guilty" component={Guilty} />
        </Switch>
    </BrowserRouter>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
