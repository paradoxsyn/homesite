/**
 * Created by Paradox on 8/4/2018.
 */
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';
import Loading from './Loading';
import About from './About';
import Projects from './Projects';
import Portfolio from './Portfolio'

/*const AsyncDynamicPage = importedComponent(
    () => import('./DynamicPage'),
    {
        LoadingComponent: Loading
    }
);
const AsyncNoMatch = importedComponent(
    () => import('./NoMatch'),
    {
        LoadingComponent: Loading
    }
);*/

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;

