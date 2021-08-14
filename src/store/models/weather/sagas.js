import { takeLatest, call, put } from '@redux-saga/core/effects';
import { currentForecastRequest } from 'api/weather';
import {
  fetchWeather,
  fetchWeatherError,
  fetchWeatherSuccess,
} from './weatherSlice';

function* fetchWeatherWorker({ payload }) {
  try {
    const { data } = yield call(
      currentForecastRequest,
      payload.lat,
      payload.lon
    );
    yield put(fetchWeatherSuccess({ data }));
  } catch (error) {
    yield put(fetchWeatherError({ error: error.message }));
  }
}

export default function* watchWeather() {
  yield takeLatest(fetchWeather.type, fetchWeatherWorker);
}
