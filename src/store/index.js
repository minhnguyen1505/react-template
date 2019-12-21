import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

export default function createStoreWithMiddleware() {
  // Define middlewares to include
  const sagaMiddleware = createSagaMiddleware();
  // Add all middlewares into an array
  const middleware = [sagaMiddleware];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // Add the Redux dev tools and middleware code together
  const enhancers = composeEnhancers(
    applyMiddleware(...middleware),
  );

  // Create a store with the reducers and middleware
  const store = createStore(reducers, enhancers);

  // Run the Redux Saga middleware listeners
  sagaMiddleware.run(sagas);

  return store;
}
