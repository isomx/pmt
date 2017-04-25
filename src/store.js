import { applyMiddleware, createStore } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers/Index';

// import {createLogger} from 'redux-logger';
// import thunk from 'redux-thunk';

export const history = createBrowserHistory();

/**
 const error = store => next => (action) => {
    try {
        next(action);
    } catch (e) {
        console.log('AHHHH!!!', e);
    }
};
 **/
const middleware = applyMiddleware(routerMiddleware(history));

// const middleware = applyMiddleware(thunk, error, routerMiddleware(history));
// const middleware = applyMiddleware(thunk, createLogger(), error, routerMiddleware(history));
export default createStore(reducers, middleware);