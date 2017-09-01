/**
 * @Author: hully
 * @Date:   2017-08-31 13:32:01
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-08-31 19:36:34
 */

"use strict";
import React from "react";
import {AddTodo} from '../actions/index';

export default class extends React.Component {
  render() {
    let {dispatch} = this.props;
    return (
      <div>
          <form onSubmit= {e => {
            e.preventDefault();
            if(!this.input.value.trim()) {return}
            dispatch(AddTodo(this.input.value));
            this.input.value = "";
          }}>
            <input type="text"
              ref={node => {this.input = node}}
              placeholder="TodoList React-Redux"/>
            <button type="submit">ADD TODO</button>
          </form>
      </div>
    )
  }
}
