import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../rootReducer';
import rootSaga from '../../sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware, logger].filter(Boolean);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)

export default store;

