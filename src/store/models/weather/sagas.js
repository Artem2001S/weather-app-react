import { takeLatest } from '@redux-saga/core/effects';
import { fetchWeather } from './weatherSlice';

function* fetchWeatherWorker({ payload }) {
  console.log(payload);
  yield;
}

export default function* watchWeather() {
  yield takeLatest(fetchWeather.type, fetchWeatherWorker);
}
