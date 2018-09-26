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
import {getListRecord} from '../actions/getList';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

     componentWillMount() {
         console.log('this',this);
         this.props.actions.getListRecord();
         //this.props.dispatch(getListRecord());
    };

    listItem = (listData) => {
        const {result} = listData.data;
        if(!_.isEmpty(result)){
            return _.map(result,(key, value) => {
                return (
                    <div key={key}>
                        <span>{value}</span>: <span>{key}</span>
                    </div>
                );
            });

        } else {
            return (
                <div>null</div>
            )
        }
    };
    render () {
        const { listData } = this.props; 
        console.log('listData', listData);
        return (
            <div>
                <Link to="/list/item">go item</Link>
                <p>这是：{_.get(listData, 'data.page_type', 'type')}</p>
                {this.listItem(listData)}
            </div>
        )
    };
}

const select = state => ({
    listData: state.list
  });
  
  const act = dispatch => ({
    actions: bindActionCreators({getListRecord}, dispatch),
    dispatch
  });
  
  export default connect(select, act)(List);