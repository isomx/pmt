import { mdTransitionActions, navActions } from './actionTypes';
import { push } from 'react-router-redux';
import { history } from '../store';

/** Installed package, could be useful: https://github.com/sindresorhus/query-string **/
export const routeTransition = (e, locOrUrl, eventProps) => {
  console.log('e = ', e);
  let loc = {
    pathname: '/dashboard',
    state: {
      something: 'something1',
    }
  };
  history.push(loc);
  // return push(loc);

  let location = Object.create(null);
  if (typeof locOrUrl === 'string') {
    const parts = locOrUrl.split('?');
    location.pathname = parts[0];
    if (parts[1]) {
      location.search = '?' + parts[1];
    }
  } else {
    location = locOrUrl;
  }
  return {
    type: mdTransitionActions.TRANSITION_ROUTE,
    payload: {
      event: e,
      location,
      eventProps,
    }
  }
}

export const appRouteTransition = (locOrUrl, parentIds) => {
  let location = Object.create(null);
  if (typeof locOrUrl === 'string') {
    const parts = locOrUrl.split('?');
    location.pathname = parts[0];
    if (parts[1]) {
      location.search = '?' + parts[1];
    }
  } else {
    location = locOrUrl;
  }
  location.state = {
    mdTransition: {
      id: parentIds[parentIds.length - 1],
      parentIds,
    },
  };
  // location.state.actionType = mdTransitionActions.APP_ROUTE_TRANSITION;
  return {
    type: mdTransitionActions.APP_ROUTE_TRANSITION,
    payload: location,
  }
}