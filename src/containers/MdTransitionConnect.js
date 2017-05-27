import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { connectActions } from '../observables/transitions/actions';
import MdTransitionBodyElement from '../components/mdTransitions/MdTransitionBodyElement';

// import difference from 'lodash/difference';
// import { createChildStream, createInternalKey, source$ } from '../observables/transitions';
// import uniqueId from 'lodash/uniqueId';

class MdTransitionConnect extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._handleSubscribe = this._handleSubscribe.bind(this);
    connectActions.connect(this._handleSubscribe);
    this.children = {};
  }
  /**
  getUniqueId(parentId) {
    return () => {
      return `${this.uniqueId}_${uniqueId()}`;
    }
  }
   **/

  _sendRequest() {

  }
  shouldComponentUpdate() {
    console.log('should mdTransitionConnect update ');
    return true;
  }

  componentWillUpdate() {
    console.log('mdTransitionConnect WILL update');
  }

  componentDidUpdate() {
    console.log('mdTransitionConnect DID update');
  }

  testReceive() {
    // console.log('testReceive, id = ', this.id);
  }

  _handleSubscribe(action) {
    switch(action.type) {
      case 'connect':
        return {
          next: (id) => {
            this.id = id;
            this.testReceive();
          },
          error: (err) => {console.log("err = ", err)},
          complete: () => {}
        }
      case 'addChild':
        return (source) =>
          source.map((elem) => {
            this.children[elem.id] = elem;
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
      case 'transitionEvent':
        console.log('mdTransitionConnect action = ', action);
        break;
      default:
    }
  }

  getChildContext() {
    return {
      mdTransition: {
        parentId: () => this.id,
      }
    }
  }

  /**
  subscribeToStream() {
    this.subscription = this.stream$.subscribe(
      (data) => { console.log('data received by ' + this.internalKey + ' = ', data) },
      (err) => {console.log(' error = ', err)},
      () => {},
    );
    source$.next({context: 'root', text: 'Hello from ' + this.internalKey});
    // source$.next('hi');
  }
   **/

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    console.log('mdTransitionConnect Rendering');
    return (
      <MdTransitionBodyElement key="root" isRoot update={true}>
        {this.props.children}
      </MdTransitionBodyElement>
    );
    /**
    let render = React.Children.map(this.state.children, (child) => {
      count++;
      return(
        <MdTransitionBodyElement key={child.key}>
          {child}
        </MdTransitionBodyElement>
      );
    });
     **/
    // return React.Children.only(this.props.children);
  }

}

MdTransitionConnect.childContextTypes = {
  mdTransition: PropTypes.object,
}

function mapStateToProps(store, ownProps) {
  return {
    location: store.router.location,

  };
}

function mapDispatchToProps(dispatch, state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MdTransitionConnect);