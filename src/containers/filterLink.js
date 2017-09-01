/**
 * @Author: hully
 * @Date:   2017-08-31 16:34:17
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-01 14:59:31
 */

"use strict";
import {connect} from 'react-redux';
import Link from '../components/link';
import {SetFilter} from '../actions/index';

const mapStateToProps = (state, ownProps) => {
  return {
      active: ownProps.filter === state.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {dispatch(SetFilter(ownProps.filter))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
