import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Navigation from './NavReducer';
import Transitions from './TransitionsReducer';
import TreeReducer from './TreeReducer';

export default combineReducers({
  router: routerReducer,
  nav: Navigation,
  transitions: Transitions,
  tree: TreeReducer,
});
