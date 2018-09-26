import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducers';

const loggerMiddleware = createLogger();
const store = createStore(
    reducers,
    applyMiddleware(
      thunkMiddleware, 
      loggerMiddleware 
    )
  )

const rootElement = document.getElementById('root');
console.log('store', store);
    render (
        <Provider store={store}>
          <App/>
        </Provider>,
        rootElement
    );


