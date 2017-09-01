/**
 * @Author: hully
 * @Date:   2017-08-31 16:31:21
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 17:37:53
 */

"use strict";
import React from 'react';
import FilterLink from '../containers/filterLink';

class Footer extends React.Component {
  render() {
    return (
      <p>
        {"Show:   "}
        <FilterLink filter="SHOW_ALL"> All </FilterLink> {" | "}
        <FilterLink filter="SHOW_COMPLETED"> Completed </FilterLink> {" | "}
        <FilterLink filter="SHOW_ACTIVE"> Active </FilterLink>
      </p>
    )
  }
}

export default Footer;
