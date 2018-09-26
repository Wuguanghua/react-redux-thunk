/**
 * Create By Guanghua on 2018/3/14.
 */

import { combineReducers } from 'redux';
import listReducer from './list';
import itemReducer from './item';

export default combineReducers ({

    list: listReducer,
    item: itemReducer
});