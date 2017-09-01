/**
 * @Author: hully
 * @Date:   2017-08-31 16:02:57
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 12:05:50
 */

"use strict";
import {connect} from 'react-redux';
import {ToggleTodo} from '../actions/index';
import TodoList from '../components/todoList';

const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
        return todos
    case "SHOW_COMPLETED":
        return todos.filter(t => t.completed)
    case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed)
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibilityTodos(state.todos, state.filter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(ToggleTodo(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
