import { mdTransitionActions } from './actionTypes';

/** Installed package, could be useful: https://github.com/sindresorhus/query-string **/
export const routeTransition = (e, locOrUrl) => {
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
    }
  }
}