/**
 * Creates the factory child for use with MdTransitionGroup/TransitionGroupCustom.
 *
 * This is a custom implementation of CSSTransitionGroup/TransitionGroup
 * (github: https://github.com/reactjs/react-transition-group)
 * to create material design transitions by managing the flow of elements in and out.
 *
 * License MIT, React license under BSD
 */

/* eslint-disable */

import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';
import raf from 'dom-helpers/util/requestAnimationFrame';
import offset from 'dom-helpers/query/offset';
import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import TweenMax, { Power3 } from 'gsap';


export default class MdTransitionGroupChild extends React.Component {
  static displayName = 'MdTransitionGroupChild';

  constructor(props) {
    super(props);
    this.registerElem = this.registerElem.bind(this);
  }

  componentWillMount() {
    // console.log('MdTransition - Will Mount = ', this.props.childRefId);
  }

  componentDidMount() {
    // console.log('MdTransition - Did Mount = ', this.props.childRefId);
  }

  componentWillUnmount() {
    // console.log('MdTransition - Will Unmount = ', this.props.childRefId);
  }

  shouldComponentUpdate(nextProps) {
    this.willAppear = false;
    if (nextProps.willLeave) {
      // console.log('NOT updating = ', this.props.childRefId);
      return false;
    }
    return true;
  }

  componentWillAppear(callback) {
    this.willAppear = true;
    // console.log('componentWillAppear = ', this.props.childRefId);
    callback();
    setTimeout(() => {
      // callback();
    }, 1500);

  }

  componentDidAppear() {
  }

  componentWillEnter(callback) {
    // console.log('willEnter = ', this.props.childRefId);
    // callback();
    // console.log('willEnter elem = ', findDOMNode(this));
    //const elem = findDOMNode(this);
    const elem = this.elem;
    // TweenMax.from(elem,3.5, {x: 0, y: 680, scale: 0, ease: Power2.easeIn});
    // TweenMax.fromTo(elem,0.4, {x: -400, y: -340, scale: 0, ease: Power4.easeInOut}, {x: 0, y: 0, scale: 1, ease: Power4.easeInOut, onComplete: callback});
    //TweenMax.from(elem,0.4, {x: -400, y: -340, scale: 0, ease: Power3.easeInOut, onComplete: callback});
    TweenMax.from(elem,0.5, {x: 89, y: 340, scaleX: 0, scaleY: 0, opacity: 0, transformOrigin: '0% 0%', ease: Power3.easeInOut, onComplete: callback});
    setTimeout(() => {
      //callback();
    }, 2500);

  }

  componentDidEnter() {

  }

  componentWillLeave(callback) {
    let elem = findDOMNode(this);
    if (!elem) {
      if (callback) {
        callback();
      }
      return;
    }

    const rect = offset(elem);
    // const rect = this.props.elemRect;
    //const rect = this.elems[refId].rect;
    //const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // const scrollTop = window.scrollY;
    // console.log('rect = ', rect);
    // console.log('scrollTop = ', scrollTop);
    // let styles = `position: fixed; z-index: 500; top: ${rect.top - scrollTop}px; width: ${rect.width}px;`;
    let styles = `position: fixed; z-index: 500; top: ${8}px; width: ${rect.width}px;`;
    // elem.style.cssText = styles;
    /**
     elem.style.position = 'fixed';
     elem.style.zIndex = '500';
     console.log('rect = ', rect);
     elem.style.top = `${rect.top}px`;
     // elem.style.height = `${rect.height}px`;
     elem.style.width = `${rect.width}px`;
     **/
    // window.scrollTo(0,0);
    /**
     this.elem.style = {
      top: `${document.body.scrollTop}px`,
      zIndex: 500,
      position: 'fixed',
      width: `${rect.width}px`,
    }
     **/
    callback();
    setTimeout(() => {
      // console.log('calling MdTransition WillLeave callback');
      // callback();
    }, 3000);
    //return;
    //this.props.registerLeaveCallback(callback);
  }

  componentDidLeave() {
    // console.log('MdTransition - Did Leave = ', this.props.childRefId);
  }

  registerElem(elem) {
    if (elem) {
      this.elem = elem;
      if (this.props.registerChildContainer) {
        this.props.registerChildContainer(this.props.childKey, elem);
      }
    }
  }

  render() {
    // console.log('rendering ', this.props.childRefId);
    const props = { ...this.props };
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return(
      <div key={this.props.childKey} ref={(elem) => this.registerElem(elem)}>
        {this.props.children}
      </div>
    );
  }


}
MdTransitionGroupChild.propTypes = {

};
