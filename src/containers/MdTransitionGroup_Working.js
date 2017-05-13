/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MdTransition from '../components/MdTransition';
import ReactTransitionGroup from 'react-addons-transition-group';

class MdTransitionGroup extends Component {
  constructor(props) {
    super(props);
    this.mdTransition = this.mdTransition.bind(this);
    this.newChildren = null;
    this.children = null;
    this.state = {
      keys: ['ph1', 'ph2'],
      count: 0,
    }
    this.runCount = 0;
    this.elems = [];
    this.registerElem = this.registerElem.bind(this);
    this.registerLeaveCallback = this.registerLeaveCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.newChildren = React.Children.map(nextProps.children, (thisArg) => {
      return React.cloneElement(thisArg, {mdTransition: this.mdTransition});
    });
    console.log('this.elems = ', this.elems);
    this.elems['child1'].style.zIndex = '-1';
    this.elems['child1'].style.position = 'fixed';
    /**
    this.prevChildren = React.Children.map(this.props.children, (thisArg) => {
      return React.cloneElement(thisArg, {mdTransition: this.mdTransition});
    });
     **/
  }

  registerLeaveCallback(callback) {
    this.leaveCallback = callback;
  }

  registerElem(id, elem) {
    if (elem) {
      this.elems[id] = elem;
    }
    console.log('this.elems = ', this.elems);
  }

  mdTransition() {

  }

  renderChildren(which) {
    let children = React.Children.map(this.props.children, (thisArg) => {
      // console.log('thisArg = ' , thisArg.props);
      return React.cloneElement(thisArg, {mdTransition: this.mdTransition});
    });
    switch (which) {
      case 'children':
        this.children = children;
        break;
      case 'newChildren':
        this.newChildren = children;
    }
  }

  render() {
    if (!this.children) {
      this.renderChildren('children');
    }
    const isLeaving = this.newChildren ? true : false;
    // console.log('this.children = ', this.children);
    return(
      <ReactTransitionGroup>
        {this.children &&
          <MdTransition key="child1" childRef={this.registerElem} childRefId="child1" isLeaving={isLeaving} registerLeaveCallback={this.registerLeaveCallback}>
            {this.children}
          </MdTransition>
        }
        {this.newChildren &&
          <MdTransition key="child2" childRef={this.registerElem} childRefId="child2" registerLeaveCallback={this.registerLeaveCallback}>
            {this.newChildren}
          </MdTransition>
        }
      </ReactTransitionGroup>
    );

    /**
     return (
       <ReactTransitionGroup>
         <MdTransition key={this.props.location.key}>
         {this.renderChildren()}
         </MdTransition>
       </ReactTransitionGroup>
     );
     **/

    /**
    switch(this.runCount) {
      case 1:
        return(
          <ReactTransitionGroup>
            <MdTransition key={'place1'}>
              {this.renderChildren()}
            </MdTransition>
          </ReactTransitionGroup>
        );
      case 2:
        return(
          <ReactTransitionGroup>
            <MdTransition style={{zIndex: 0}} key={'place1'} isLeaving={true}>
              {this.renderChildren()}
            </MdTransition>
            <MdTransition style={{zIndex: 1}} key={'place2'}>
              {this.renderChildren()}
            </MdTransition>
          </ReactTransitionGroup>
        );
      case 3:
        return(
          <ReactTransitionGroup>
            <MdTransition style={{zIndex: 2}} key={'place2'}>
              {this.renderChildren()}
            </MdTransition>
          </ReactTransitionGroup>
        );

    }
     **/


  }

}

function mapStateToProps(store, ownProps) {
  // console.log('store = ', store);
  return {};
}

function mapDispatchToProps(dispatch, state) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MdTransitionGroup));