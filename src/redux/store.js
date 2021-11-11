/**when ever actions get fired, thanks to this
 * file they're catch and showed, in the model
 * is placed between the action and the 
 * root-reducer*/
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store;