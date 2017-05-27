/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MdTransitionBodyElement extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return true;
    // return this.props.update ? true : false;
  }

  render() {
    console.log('MdTransitionBodyElement Rendering = ', this.props.children);
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}