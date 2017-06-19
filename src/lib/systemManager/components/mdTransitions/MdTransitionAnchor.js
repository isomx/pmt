import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { actionTypes } from '../../actions/actionTypes';

export default class MdTransitionAnchor extends Component {
  constructor(props, context) {
    super(props, context);
    this.registerRef = this.registerRef.bind(this);
    this.receiveDispatch = this.receiveDispatch.bind(this);
    this.parentId = this.context.mdTransitionParentId;
    if (this.parentId) {
      this.dispatch = this.context.mdTransitionDispatch;
      this.id = this.dispatch({
        type: actionTypes.CONNECT_COMPONENT,
        payload: {
          type: 'anchor',
          parentId: this.parentId,
          receiveDispatch: this.receiveDispatch,
          name: this.props.name,
        }
      });
    }
  }

  receiveDispatch(action) {
    switch(action.type) {
      case actionTypes.ANCHOR_GET_ELEM:
        if (this.props.findById) {
          return document.getElementById(this.props.findById);
        }
        return this.ref;
      default:
    }
  }

  getChildContext() {
    return {
      mdTransitionParentId: this.id,
    }
  }

  componentWillUnmount() {
    if (this.id) {
      this.dispatch({
        type: actionTypes.DISCONNECT_COMPONENT,
        payload: {
          id: this.id,
        }
      });
    }
  }

  registerRef(ref) {
    if (ref) {
      this.ref = ref;
    }
  }

  render() {
    const { children, component, render, ...props } = this.props;
    if (render) {
      return render({registerDOMElem: this.registerRef});
    } else if (component) {
      delete props.name;
      props.ref = this.registerRef;
      return React.createElement(component, props, children);
    } else {
      return (<div ref={this.registerRef}>{children}</div>);
    }
  }
}

MdTransitionAnchor.childContextTypes = {
  mdTransitionParentId: PropTypes.string,
}
MdTransitionAnchor.contextTypes = {
  mdTransitionParentId: PropTypes.string,
  mdTransitionDispatch: PropTypes.func,
}
