/* eslint-disable */
import { createLogic } from 'redux-logic';
import { navActions, mdTransitionActions } from '../actions/actionTypes';
import difference from 'lodash/difference';
import { getElems, resetElems, getBoundingRect } from '../observables/transitions';
// import Rx from 'rxjs/Rx';
import { push } from 'react-router-redux';

let prevElems = {};
let prevBoundingRect = {};

export const mdTransition = createLogic({
  type: mdTransitionActions.TRANSITION_ROUTE,
  cancelType: ['REGISTER_ROOT_CANCEL'],
  debounce: 0,
  throttle: 0,
  latest: false, //default
  transform({ getState, action }, next, reject) {
    console.log('transforming action = ', action);
    prevElems = getElems();
    prevBoundingRect = getBoundingRect();
    resetElems();
    console.log('transition prevElems = ', prevElems);
    console.log('transition prevBoundingRect = ', prevBoundingRect);
    next(action);
  },
  process({ getState, action }, dispatch, done) {
    console.log('processing action = ', action);
    dispatch(push(action.payload.location));
    done();
  }
});

/**
export const mdTransitionCalculate = createLogic({
  type: mdTransitionActions.TRANSITION_CALCULATE,


});
 **/

/**
export const mdTransition = createLogic({
  type: mdTransitionActions.TRANSITION_ROUTE,
  cancelType: ['REGISTER_ROOT_CANCEL'],
  debounce: 0,
  throttle: 0,
  latest: false, //default
  transform({ getState, action }, next, reject) {
    console.log('transforming action = ', action);
    const state = getState();
    console.log('state = ', state);
    // next({type: 'NO_ACTION'});
    if (!elems.first) {
      elems.first = 'first';
      console.log('elems = ', elems);
      console.log('rejecting');
      next(action);
    } else {
      elems.second = 'second';
      console.log('elems = ', elems);
      console.log('sending');
      next({type: 'something!'});
    }

  },
  process({ getState, action }) {
    console.log('processing action = ', action);
    let state = getState();
    console.log('procssing, state = ', state);
    return action;
    return {
      type: 'GET_LOCATION',
      payload: 'none'
    }
  }
});
 **/

