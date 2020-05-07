import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();
const middleware = applyMiddleware(epicMiddleware);
const store = createStore(rootReducer, middleware);

// Debugging purpose. Access store from console
global.store = __DEV__ && store;

epicMiddleware.run(rootEpic);

export default store;
