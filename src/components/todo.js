/**
 * @Author: hully
 * @Date:   2017-08-31 16:19:03
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 12:37:38
 */

"use strict";
import React from 'react';

class Todo extends React.Component {
  render() {
    let {onClick, completed, text} = this.props;
    return (
      <li onClick={onClick}
          style = {{textDecoration: completed ? "line-through" : "none"}}>
          {text}
      </li>
    )
  }
}

export default Todo;
