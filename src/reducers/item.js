/**
 * Create By Guanghua on 2018/3/14.
 */

import {
    GET_LIST_START,
    GET_LIST_SUCCESS,
    GET_LIST_FAILED
} from '../actions/getList';

const initState = {
    loading: true,
    data: {}
};

export default function itemReducer (state = initState, action = {}) {
   // console.log('action', action);
    switch(action.type) {
            case 'RECEIVE_ITEM_DATA':
            return {
                ...state,
                data: action.data,
                loading: false
            }
        default:
            return state;
    }
}
