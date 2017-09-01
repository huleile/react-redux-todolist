/**
 * @Author: hully
 * @Date:   2017-08-31 14:10:20
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 12:26:16
 */

"use strict";
import todos from './todo';
import filter from './filter';
import {combineReducers} from 'redux';


const Reducers = combineReducers({
  todos,
  filter
});

export default Reducers;
