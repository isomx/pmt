import { navActions } from '../actions/actionTypes';

export default function (state = {nonce: 0}, action) {
  switch (action.type) {
    case navActions.LOCATION_CHANGE:
      console.log('TRANSITION REDUCER ACTION = ', action);
      return state;
    default:
      console.log('TRANSITION REDUCER ACTION = ', action);
      return state;
  }
}