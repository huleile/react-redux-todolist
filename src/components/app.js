/**
 * @Author: hully
 * @Date:   2017-08-31 13:26:07
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 12:08:19
 */

"use strict";

import React from 'react';
import AddTodo from '../containers/addTodo';
import TodoList from '../containers/todoList';
import Footer from './footer';

export default class extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    )
  }
}
