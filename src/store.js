/* eslint-disable */
import { applyMiddleware, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import combinedLogic from './logic/index';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers/Index';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import { observable } from './middleware/observables';

export const history = createBrowserHistory();

const deps = {
  key: 'keyedVal1',
};
const logicMiddleware = createLogicMiddleware(combinedLogic, deps);

 const error = store => next => action => {
   console.log('error store = ', store);
   console.log('error next = ', next);
   console.log('error action = ', action);
   // action.payload.something = '789';
   //next(action);
   return false;


   /**

   try {
        next(action);
    } catch (e) {
        console.log('AHHHH!!!', e);
    }
    **/
};

// const middleware = applyMiddleware(thunk, routerMiddleware(history), error, createLogger());
const middleware = applyMiddleware(thunk, routerMiddleware(history), logicMiddleware);


// const middleware = applyMiddleware(thunk, error, routerMiddleware(history));
// const middleware = applyMiddleware(thunk, createLogger(), error, routerMiddleware(history));
export default createStore(reducers, middleware);