/**
 * @Author: hully
 * @Date:   2017-08-31 16:14:52
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 11:57:12
 */

"use strict";
import React from 'react';
import Todo from './todo';

class TodoList extends React.Component {
  render() {
    let {todos, onTodoClick} = this.props;
    return (
      <ul>
        {
          todos.map(todo => {
            return (
              <Todo
                  key = {todo.id}
                  {...todo}
                  onClick = {()=> onTodoClick(todo.id)}
              />)
          })
        }
      </ul>
    )
  }
}

export default TodoList;
