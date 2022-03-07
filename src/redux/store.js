import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

//we can even user applymiddleware(logger), but the used practice will help us make our application more scalable
export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
