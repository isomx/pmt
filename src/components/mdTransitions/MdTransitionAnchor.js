/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { anchorActions } from '../../observables/transitions/actions';

export default class MdTransitionAnchor extends Component {
  constructor(props, context) {
    super(props, context);
    this.registerElem = this.registerElem.bind(this);

    this._handleAction = this._handleAction.bind(this);
    this.parentId = this.context.mdTransition.parentId();
    anchorActions.connect(this.parentId, this._handleAction, this.props.name);
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
      case 'getChildren':
        return this.props.children;
        /**
        return (
          <MdTransitionAnchor {...this.props} />
        );
         **/
      case 'getLocation':
        return this.elem ? this.elem.getBoundingClientRect() : null;
        /**
      case 'transitionEvent':
        console.log('mdTransitionAnchor transitionEvent = ', action);
        if (action.payload.anchorParentId === this.parentId) {
          action.payload.anchorElem = this.elem;
          if (this.children) {
            action.payload.commonElems = this.children;
          }
        }
        if (action.payload.store && action.payload.store[this.parentId]) {
          action.payload.store[this.parentId].callback(action);
        }
         **/
      case 'routeTransition':
      case 'dispatchToParentGroup':
        action.payload.parentIds.push(this.id);
        action.payload.commonElements = this.children;
        action.payload.store[this.parentId].callback(action);
        break;
    }
  }

  getChildContext() {
    return {
      mdTransitionAnchor: {
        parentId: () => this.id,
      }
    }
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }


  registerElem(elem) {
    if (elem) {
      this.elem = elem;
    }
  }

  render() {
    console.log('Anchor Rendering');
    return(
      <div ref={(elem) => this.registerElem(elem)}>
        {this.props.children}
      </div>
    );

  }
}
MdTransitionAnchor.childContextTypes = {
  mdTransitionAnchor: PropTypes.object,
}
MdTransitionAnchor.contextTypes = {
  mdTransition: PropTypes.object,
}
