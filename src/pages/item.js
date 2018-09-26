/**
 * Create By Guanghua on 2018/3/14.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import request from '../utils/request';
import { get, post } from '../utils/ajax';
import _ from 'lodash';
import { getItemRecord } from '../actions/getItem';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        const payload = {
            id: 1
        };

        this.props.dispatch(getItemRecord(JSON.stringify(payload)));
    };

    listItem = (itemData) => {
        console.log();
        const result = _.get(itemData, 'data.result', []);
        if (!_.isEmpty(result)) {
            return _.map(result, (key, value) => {
                return (
                    <div key={key}>
                        <span>{value}</span>: <span>{key}</span>
                    </div>
                )
            });
        } else {
            return <div>null</div>
        }
    };
    formItem = () => {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputFile">File input</label>
                        <input type="file" id="exampleInputFile" />
                        <p class="help-block">Example block-level help text here.</p>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" /> Check me out
    </label>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }

    render() {
        console.log('this.props=>>>> item', this.props);
        const { itemData } = this.props;
        return (
            <div>
                <Link to="/list">back list</Link>
                <p>this is Item Page!!</p>
                {this.listItem(itemData)}
                {this.formItem()}
            </div>
        );

    };
}

const select = state => ({
    itemData: state.item
});

const act = dispatch => ({
    actions: bindActionCreators({ getItemRecord }, dispatch),
    dispatch
});

export default connect(select, act)(Item);