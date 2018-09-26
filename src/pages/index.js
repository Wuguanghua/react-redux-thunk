/**
 * Create By Guanghua on 2018/3/14.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        console.log(' HomePage ComponentWillMount...');
    };

    render () {
        return (
            <div>
                <Link to="/list">go list</Link>
                <p>Hello, this is home page!</p>
            </div>
        )

    };
};

export default Home;