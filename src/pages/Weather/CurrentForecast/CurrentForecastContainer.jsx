import React from 'react';
import { useSelector } from 'react-redux';
import {
  currentForecastSelector,
  isPendingSelector,
} from 'store/models/weather/selectors';
import CurrentForecast from './CurrentForecast';

const CurrentForecastContainer = () => {
  const pending = useSelector(isPendingSelector);
  const currentForecast = useSelector(currentForecastSelector);

  return (
    <CurrentForecast
      pending={pending}
      temperature={currentForecast?.temp_c}
      humidity={currentForecast?.humidity}
      precipitation={currentForecast?.precip_mm}
      status={currentForecast?.condition?.text}
      statusIcon={currentForecast?.condition?.icon}
      windSpeed={currentForecast?.wind_kph}
    />
  );
};

export default React.memo(CurrentForecastContainer);
