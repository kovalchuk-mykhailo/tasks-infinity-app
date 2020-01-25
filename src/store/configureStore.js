import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from '../reducers';
import { createLogger } from 'redux-logger';

export default function configureStore(initialState) {
  const logger = createLogger();
  console.log(logger);

  const store = createStore(
    allReducers,
    initialState,
    composeWithDevTools(applyMiddleware(logger))
  );

  return store;
};