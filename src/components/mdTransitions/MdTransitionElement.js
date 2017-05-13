/* eslint-disable */
import React, { Component } from 'react';
import { registerElem } from '../../observables/transitions';

export default class MdTransitionElement extends Component {
  constructor(props) {
    super(props);
    this.registerElem = this.registerElem.bind(this);
    this.state = {
      runCount: 0,
    };
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  registerElem(elem) {
    if (elem) {
      this.elem = elem;
      registerElem('commonElement', this.props.name, elem);
      /**
       const newElem = elem.cloneNode(true);
       document.body.append(newElem);
      if (this.state.runCount === 0) {
        this.setState({
          runCount: 1,
          elem: elem,
        });
      }
       // <div dangerouslySetInnerHTML={{__html: this.state.elem.innerHTML}} />
       **/
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
