import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Navigation from './NavReducer';
import Transitions from './TransitionsReducer';

export default combineReducers({
  router: routerReducer,
  nav: Navigation,
  transitions: Transitions,
});
