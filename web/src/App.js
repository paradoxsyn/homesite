import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {broswerHistory} from 'react-router-dom'
import Navbar from './components/HeaderComponents/Navbar'
import HomePage from './HomePage'


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Route name="home" exact path="/home" component={HomePage} />
            </div>
        </Router>
    );
  }
}

export default App;
