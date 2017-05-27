import React from 'react';
import PropTypes from 'prop-types';
import { transitionEventActions } from '../../observables/transitions/actions';

export default class MdTransitionAction extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    // this.parentId = this.context.mdTransitionAnchor ? this.context.mdTransitionAnchor.parentId() : (this.context.mdTransition ? this.context.mdTransition.parentId() : null);
    this.getParentId = this.getParentId.bind(this);
    this.getStore = this.getStore.bind(this);
    this.dispatchToParentGroup = this.dispatchToParentGroup.bind(this);
    this.routeTransition = this.routeTransition.bind(this);
  }

  getParentId() {
    return this.context.mdTransitionAnchor ? this.context.mdTransitionAnchor.parentId() : (this.context.mdTransition ? this.context.mdTransition.parentId() : null);
  }

  getStore() {
    return transitionEventActions('getStore');
  }

  dispatchToParentGroup(action) {
    transitionEventActions({
      type: 'dispatchToParentGroup',
      payload: {
        parentId: this.getParentId(),
      },
      receivedAction: action,
    });
  }

  routeTransition(locOrUrl, transitionType, anchorName, commonElementName) {
    transitionEventActions({
      type: 'routeTransition',
      payload: {
        parentId: this.getParentId(),
        locOrUrl,
        transitionType,
        anchorName,
        commonElementName,
      }
    });
  }

  render() {
    return this.props.render({
      getParentId: this.getParentId,
      getStore: this.getStore,
      dispatchToParentGroup: this.dispatchToParentGroup,
      routeTransition: this.routeTransition,
    });
    /**
    const { eventType, eventAction } = this.props;
    let payload = {
      eventType,
      eventAction,
      parentId: this.parentId,
    };
    let child = React.Children.map(this.props.children, (thisArg) => {
      let props = {...thisArg.props};
      switch(eventType) {
        case 'routeTransition':
          if (props.onClick) {
            payload.onClick = thisArg.props.onClick;
          }
          props.onClick = (e) => {
            payload.event = e;
            transitionEventActions({
              type: 'transitionEvent',
              payload,
            });
          };
          return React.cloneElement(thisArg, props, thisArg.props.children);
        default:
          return thisArg;
      }
    });
    return child[0];
     **/

  }
}

MdTransitionAction.contextTypes = {
  mdTransitionAnchor: PropTypes.object,
  mdTransition: PropTypes.object,
}
