import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from "./reducer";
import thunkMiddleware from 'redux-thunk';

import loggerMiddleware from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;

// store.subscribe(() => {
//     console.log(store.getState());
// });