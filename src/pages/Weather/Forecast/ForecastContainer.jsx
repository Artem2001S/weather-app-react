import React from 'react';
import { useSelector } from 'react-redux';
import { forecastArraySelector } from 'store/models/weather/selectors';
import Forecast from './Forecast';

const ForecastContainer = () => {
  const forecastArr = useSelector(forecastArraySelector);

  return <Forecast forecast={forecastArr} />;
};

export default ForecastContainer;
