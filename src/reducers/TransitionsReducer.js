import { navActions } from '../actions/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case navActions.LOCATION_CHANGE:
      console.log('TransitionReducer action = ', action);
      return state;
    default:
      return state;
  }
}