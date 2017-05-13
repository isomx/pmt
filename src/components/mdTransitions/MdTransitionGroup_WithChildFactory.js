/**
 * This is a custom implementation of CSSTransitionGroup/TransitionGroup
 * (github: https://github.com/reactjs/react-transition-group)
 * and React Transition Group Plus (github: https://github.com/cheapsteak/react-transition-group-plus)
 * to create material design transitions by managing the flow of elements in and out.
 *
 * It utilizes TransitionGroupCustom, which is the custom implementation of TransitionGroup
 *
 * License MIT, React license under BSD
 */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import TransitionGroupCustom from '../../containers/TransitionGroupCustom';
import MdTransitionGroupChild from './MdTransitionGroupChild';

export default class MdTransitionGroup extends React.Component {
  static displayName = 'MdTransitionGroup';

  // We need to provide this childFactory so that
  // MdTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.
  _childFactory = child => (
    React.createElement(
      MdTransitionGroupChild,
      {
        name: this.props.transitionName,
        appear: this.props.transitionAppear,
        enter: this.props.transitionEnter,
        leave: this.props.transitionLeave,
        appearTimeout: this.props.transitionAppearTimeout,
        enterTimeout: this.props.transitionEnterTimeout,
        leaveTimeout: this.props.transitionLeaveTimeout,
        childRefId: this.props.childRefId,
        transitionMode: this.props.transitionMode,
      },
      child,
    )
  );

  render() {
    return React.createElement(
      TransitionGroupCustom,
      Object.assign({}, this.props, { childFactory: this._childFactory }),
    );
  }

}

MdTransitionGroup.propTypes = {
  component: PropTypes.any,
  childFactory: PropTypes.func,
  children: PropTypes.node,
  transitionMode: PropTypes.oneOf(['in-out', 'out-in', 'simultaneous']),
};
MdTransitionGroup.defaultProps = {
  component: 'span',
  childFactory: child => child,
  transitionMode: 'simultaneous',
};