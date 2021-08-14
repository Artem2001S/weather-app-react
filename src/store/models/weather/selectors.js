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
