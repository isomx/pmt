/* eslint-disable */

import React, {PureComponent, Component} from "react";
import { containerStream$, childStream$, updateChildren } from '../observables/transitions';

export default class MdTransition extends Component {
  constructor(props) {
    super(props);
    this.registerElem = this.registerElem.bind(this);
    this.elems = {};
  }



  shouldComponentUpdate(nextProps, nextState) {
    // console.log('should component update = ', nextProps);
    // console.log('nextProps = ', nextProps);
    // console.log('props.theKey = ', this.props.theKey);
    //return false;
    // if (nextProps.theKey === this.props.theKey) return false;
    console.log('MDTransition ShouldUpdate, currKey = ' + this.props.childRefId + ', newKey = ' + nextProps.childRefId);
    // return false;
    if (nextProps === this.props) {
      console.log('returning false');
      return false
    } else {
      console.log('nextProps = ', nextProps);
      console.log('currProps = ', this.props);
      console.log('returning true');
      return true;
    }
  }


  componentWillAppear(callback) {
    console.log('MdTransition - Will Appear = ', this.props.childRefId);
    setTimeout(() => {
      callback();
    }, 1000);
  }

  componentDidAppear() {
    console.log('MdTransition - Did Appear = ', this.props.childRefId);
  }

  componentWillEnter(callback) {
    console.log('MdTransition - Will Enter = ', this.props.childRefId);
    setTimeout(() => {
      callback();
    }, 1000);
  }

  componentDidEnter() {
    console.log('MdTransition - Did Enter = ', this.props.childRefId);
  }

  componentWillLeave(callback) {
    console.log('MdTransition - Will Leave = ', this.props.childRefId);
    const refId = this.props.childRefId;
    // console.log('this.elems for ' + refId + ' = ', this.elems[refId])
    const elem = this.elems[refId].elem;
    const rect = elem.getBoundingClientRect();
    //const rect = this.elems[refId].rect;
    //const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const scrollTop = window.scrollY;
    console.log('rect = ', rect);
    console.log('scrollTop = ', scrollTop);
    // let styles = `position: fixed; z-index: 500; top: ${rect.top - scrollTop}px; width: ${rect.width}px;`;
    let styles = `position: fixed; z-index: 500; top: 8px; width: ${rect.width}px;`;
    elem.style.cssText = styles;
    /**
    elem.style.position = 'fixed';
    elem.style.zIndex = '500';
    console.log('rect = ', rect);
    elem.style.top = `${rect.top}px`;
    // elem.style.height = `${rect.height}px`;
    elem.style.width = `${rect.width}px`;
     **/
    window.scrollTo(0,0);
    /**
    this.elem.style = {
      top: `${document.body.scrollTop}px`,
      zIndex: 500,
      position: 'fixed',
      width: `${rect.width}px`,
    }
     **/

    setTimeout(() => {
      console.log('calling MdTransition WillLeave callback');
      callback();
    }, 3000);
    //return;
    //this.props.registerLeaveCallback(callback);
  }

  componentDidLeave() {
    console.log('MdTransition - Did Leave = ', this.props.childRefId);
  }

  componentWillMount() {
    console.log('MdTransition - Will Mount = ', this.props.childRefId);
    this.containerStream = containerStream$
      .subscribe(
        (v) => {
          console.log('MdTransition Stream = ', v);
        }
      );
    this.childStream = childStream$
      .subscribe(
        (v) => {
          console.log('MdTransition Stream child = ', v);
          this.elems = v;
        }
      );
  }

  componentDidMount() {
    console.log('MdTransition - Did Mount = ', this.props.childRefId);
  }

  componentWillUnmount() {
    console.log('MdTransition - Will Unmount = ', this.props.childRefId);
    this.containerStream.unsubscribe();
    this.childStream.unsubscribe();
  }

  registerElem(id, elem) {
    if (elem) {
      this.elem = elem;
      updateChildren(id, elem);
      //this.elems[id] = elem;
    }
    // console.log('this.elems = ', this.elems);
  }

  render() {
    // console.log('MdTransition Rendering');
    // console.log('this.runCount = ', this.runCount);
    this.runCount++;
    const width = 1920 - 100;
    /*
    return(
      <div ref={(elem) => this.props.childRef(this.props.childRefId, elem)}>
          {this.props.children}
      </div>
    );
    */
    console.log('MdTransition Rendering ', this.props.childRefId);
    return (
      <div ref={(elem) => this.registerElem(this.props.childRefId, elem)}>
        {this.props.children}
      </div>
    )
  }
}

