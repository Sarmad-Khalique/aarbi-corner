import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import rootReducer from "./root-reducer";

const middleware = [logger];

//we can even user applymiddleware(logger), but the used practice will help us make our application more scalable
const store = createStore(rootReducer, applyMiddleware(...middleware));


export default store;
