/**
 * @Author: hully
 * @Date:   2017-08-31 14:07:32
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 11:40:03
 */

"use strict";

const Filter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default Filter;
