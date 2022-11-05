import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducer/root.reducer'
import { rootSaga } from '../redux/saga/root.saga'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist : ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middleWare = [thunk ,sagaMiddleware];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWare)
)

sagaMiddleware.run(rootSaga)
export let persistor = persistStore(store);