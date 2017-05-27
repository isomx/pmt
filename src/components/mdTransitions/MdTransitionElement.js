/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { commonElementActions } from '../../observables/transitions/actions';

export default class MdTransitionElement extends Component {
  constructor(props, context) {
    super(props, context);
    this.registerElem = this.registerElem.bind(this);
    this._handleAction = this._handleAction.bind(this);

    this.parentId = this.context.mdTransitionAnchor && this.context.mdTransitionAnchor.parentId ? this.context.mdTransitionAnchor.parentId() : null;
    if (this.parentId) {
      commonElementActions.connect(this.parentId, this._handleAction, this.props.name);
    }
    this.children = {};
  }

  _handleAction(action) {
    switch(action.type) {
      case 'connect':
        return {
          next: (id) => {
            this.id = id;
          },
          error: (err) => {console.log("err = ", err)},
          complete: () => {}
        }
      case 'addChild':
        return (source) =>
          source.map((elem) => {
            this.children[elem.id] = elem;
            // console.log('this.children = ', this.children);
            return elem.id;
          })
      case 'removeChild':
        return (source) =>
          source.map((elem) => {
            if (this.children[elem.id]) {
              delete this.children[elem.id];
            }
            return elem;
          })
      case 'getRef':
        return this.elem;
      case 'getChildren':
        return this.props.children;
    }
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  registerElem(elem) {
    if (elem) {
      this.elem = elem;
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

MdTransitionElement.contextTypes = {
  mdTransitionAnchor: PropTypes.object,
}