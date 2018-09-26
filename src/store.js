/**
 * Create By Guanghua on 2018/3/15.
 */
import {createStore,applyMiddleware} from "redux";
import  thunk from "redux-thunk";
import logger from 'redux-logger';
import reducers from './reducers';


const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
  );
  
console.log('store', store);

