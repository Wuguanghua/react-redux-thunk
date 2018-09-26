/**
 * Create By Guanghua on 2018/3/14.
 */
import {post} from '../utils/ajax';

export const receiveData = data => ({ type: 'RECEIVE_ITEM_DATA', data: data });

export function getItemRecord(payload) {
  
    return function (dispatch) {
  
       return post('http://yapi.demo.qunar.com/mock/5228/record/item',payload,(res) => {
              const data = JSON.parse(res);
              dispatch(receiveData(data));
       });
    }
  }
