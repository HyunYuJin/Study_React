import { createStore, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import quiz from './modules/quiz';
import rank from './modules/rank';

export const history = createBrowserHistory();

const rootReducer = combineReducers({ quiz, rank });

const store = createStore(rootReducer);

export default store;