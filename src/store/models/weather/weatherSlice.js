import { createSlice } from '@reduxjs/toolkit';

const name = 'weather';
const initialState = {
  isPending: false,
  error: '',
  data: {
    location: {},
    current: {},
    forecast: {},
  },
};

const weatherSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchWeather(state) {
      state.isPending = true;
    },

    fetchWeatherSuccess(state, { payload }) {
      state.isPending = false;
      state.data = payload.data;
    },

    fetchWeatherError(state, { payload }) {
      state.isPending = false;
      state.error = payload.error;
    },
  },
});

export const weatherReducer = weatherSlice.reducer;
export const { fetchWeather, fetchWeatherError, fetchWeatherSuccess } =
  weatherSlice.actions;
