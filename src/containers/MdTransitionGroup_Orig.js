/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import MdTransition from '../components/MdTransition';
import ReactTransitionGroup from 'react-addons-transition-group';
import { containerStream$, childStream$, updateContainers } from '../observables/transitions';
import _ from 'lodash';

class MdTransitionGroup extends Component {
  constructor(props) {
    super(props);
    this.elems = [];
    this.registerLeaveCallback = this.registerLeaveCallback.bind(this);
  }

  componentWillMount() {
    this.containerStream = containerStream$
      .subscribe(
        (v) => {
          console.log('v = ', v);
        }
      );
    this.childStream = childStream$
      .subscribe(
        (v) => {
          console.log('child = ', v);
        }
      );
  }

  componentDidMount() {
    console.log('MD DID Mount');
  }

  componentWillUnmount() {
    this.containerStream.unsubscribe();
    this.childStream.unsubscribe();
  }

  registerLeaveCallback(callback) {
    setTimeout(() => {
      console.log('calling leave callback');
      callback();
    }, 5000);
  }

  render() {
    console.log()
    switch(this.props.transitionType) {
      case 'route':
        return (
          <Route render={(props) => {
            let render = React.Children.map(this.props.children, (thisArg) => {
              const route = (
                <Route {...thisArg.props} render={(childProps) => {
                  return React.cloneElement(thisArg, childProps)
                }} />
              );
              if (thisArg.props.path === props.location.pathname) {
                return(
                  <MdTransition key={props.location.pathname} childRefId={props.location.key ? props.location.key : '13125'}>
                    {route}
                  </MdTransition>
                );
              } else {
                return route;
              }
            })
            return(
              <ReactTransitionGroup>
                {render}
              </ReactTransitionGroup>
            );
          }} />
        );
      case 'switchRoute':
        return (
          <Route render={(props) => {
            let render = React.Children.map(this.props.children, (thisArg) => {
              return (
                <Route {...thisArg.props} render={(childProps) => {
                  return React.cloneElement(thisArg, childProps)
                }} />
              );
            })
            return(
              <div ref={(elem) => updateContainers(this.props.transitionId, elem)}>
                <ReactTransitionGroup>
                  <MdTransition key={props.location.key} childRefId={props.location.key ? props.location.key : '13125'}>
                    <Switch>
                      {render}
                    </Switch>
                  </MdTransition>
                </ReactTransitionGroup>
              </div>
            );
          }} />
        );
      default:
        return null;
    }










    if (this.props.transitionId === 'root') {
      return (
        <div id="md-transition--root">
          {this.props.children}
        </div>
      )
    };
    console.log('children = ', this.props.children);
    if (!this.children) {
      this.renderChildren('children');
    }
    const isLeaving = this.newChildren ? true : false;
    // console.log('this.children = ', this.children);
    const locationKey = this.props.location.key ? this.props.location.key : '281zazz';
    const refId =  this.children ? 'child2' : 'child1';
    // console.log('locationKey = ', locationKey);
    /**
    return (
      <div>
        {this.props.children}
      </div>
    );

    return (
      <ReactTransitionGroup>
        <MdTransition key={locationKey} theKey={locationKey} childRef={this.registerElem} childRefId="child1" registerLeaveCallback={this.registerLeaveCallback}>
          {
            React.Children.map(this.props.children, (thisArg) => {
              return React.cloneElement(thisArg, {mdTransition: this.mdTransition});
            })
          }
        </MdTransition>
      </ReactTransitionGroup>
    );
     **/

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