/**
 * @Author: hully
 * @Date:   2017-08-31 13:35:04
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 11:10:02
 */

"use strict";

let nextTodo = 0;

const AddTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodo++,
    text
  }
};


const SetFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
};


const ToggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  }
};

export {AddTodo, SetFilter, ToggleTodo};
