import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import treeReducer from "./TreeReducer";

export default combineReducers({
  // tree: treeReducer,
  router: routerReducer,
});
