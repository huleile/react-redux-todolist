/**
 * @Author: hully
 * @Date:   2017-08-31 11:44:57
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 12:31:19
 */

"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app';
import Reducers from './reducers/index';

const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
