import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {broswerHistory} from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route name="home" exact path="/home" component={HomePage} />
                <Route name="home" exact path="/" component={HomePage} />
                <Route name="about" exact path="/about" component={AboutPage} />
            </div>
        </Router>
    );
  }
}

export default App;
