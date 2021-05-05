import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// * it could be like this too
// const store = createStore(rootReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

// !this does not work instead I use export const ...
// export default { store, persistor };
