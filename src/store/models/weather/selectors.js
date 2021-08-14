import { createSelector } from 'reselect';

export const weatherSelector = createSelector(
  (state) => state,
  (state) => state.weather
);

export const isPendingSelector = createSelector(
  weatherSelector,
  (state) => state.isPending
);

export const dataSelector = createSelector(
  weatherSelector,
  (state) => state.data
);

export const locationSelector = createSelector(
  dataSelector,
  (data) => data.location
);

export const localTimeSelector = createSelector(
  locationSelector,
  (location) => location.localtime
);

export const timezoneSelector = createSelector(
  locationSelector,
  (location) => location.tz_id
);

export const currentForecastSelector = createSelector(
  dataSelector,
  (data) => data.current
);

export const errorSelector = createSelector(
  weatherSelector,
  (state) => state.error
);
