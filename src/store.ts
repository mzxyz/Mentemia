import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createDebugger from 'redux-flipper';
import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();
// Config for flipper debugging
const flipperReduxDebugger = createDebugger();

// Config for redux DevTools integration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(
  epicMiddleware,
  flipperReduxDebugger
);

const store = createStore(rootReducer, composeEnhancers(middleware));

epicMiddleware.run(rootEpic);

export default store;
