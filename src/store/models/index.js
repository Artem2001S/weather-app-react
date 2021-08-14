import { weatherReducer } from './weather';
import { all } from '@redux-saga/core/effects';
import watchWeather from './weather/sagas';

export const rootReducer = { weather: weatherReducer };
export const rootSaga = function* () {
  yield all([watchWeather()]);
};
