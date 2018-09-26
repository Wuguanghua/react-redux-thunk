/**
 * Create By Guanghua on 2018/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, hashHistory} from 'react-router';
import Home from './pages/index';
import List from './pages/list';
import Item from './pages/item';

class App extends React.Component {

    render () {
        return (
            <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/list/item" component={Item} />
          </Router>
        );
    }
}

export default App;