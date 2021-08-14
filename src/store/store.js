import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer, rootSaga } from './models';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
