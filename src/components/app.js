/**
 * @Author: hully
 * @Date:   2017-08-31 13:26:07
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 16:56:43
 */

"use strict";

import React from 'react';
import AddTodo from '../containers/addTodo';
import TodoList from '../containers/todoList';
import Footer from './footer';
import "../public/styles/index";

export default class extends React.Component {
  render() {
    return (
      <div className="list">
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    )
  }
}
