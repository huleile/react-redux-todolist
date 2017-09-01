/**
 * @Author: hully
 * @Date:   2017-08-31 16:31:36
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-08-31 19:31:41
 */

"use strict";
import React from 'react';

class Link extends React.Component {
  render() {
    let {active, children, onClick} = this.props;
    if(active) {
      return <span>{children}</span>
    }
    return (
      <a href="#" onClick={ e => {
        e.preventDefault();
        onClick();
      }}>{children}</a>
    )
  }
}

export default Link;
