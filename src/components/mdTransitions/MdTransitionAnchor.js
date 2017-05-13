/* eslint-disable */
import React, { Component } from 'react';
import { registerElem } from '../../observables/transitions';

export default class MdTransitionAnchor extends Component {
  constructor(props) {
    super(props);
    this.registerElem = this.registerElem.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  registerElem(elem) {
    if (elem) {
      this.elem = elem;
      registerElem('anchor', this.props.name, elem);
    }

  }

  render() {
    return(
      <div ref={(elem) => this.registerElem(elem)}>
        {this.props.children}
      </div>
    );
  }
}
