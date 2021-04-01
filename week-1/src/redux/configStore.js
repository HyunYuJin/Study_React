import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bucket from './modules/bucket';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const middleware = [thunk];

// store에 middleware 저장
const enhancer = applyMiddleware(...middleware);
// store의 상태 값(rootReducer)
const rootReducer = combineReducers({ bucket });

const store = createStore(rootReducer, enhancer);

export default store;