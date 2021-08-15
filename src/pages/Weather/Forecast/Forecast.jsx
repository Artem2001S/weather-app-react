import React from 'react';
import PropTypes from 'prop-types';
import ForecastDay from './ForecastDay';

import styles from './Forecast.module.scss';

const Forecast = ({ pending, forecast }) => {
  return (
    <div className={styles.Container}>
      {pending
        ? 'Loading...'
        : forecast.map(({ date, day }, index) => (
            <ForecastDay
              key={index}
              date={date}
              maxT={day.maxtemp_c}
              minT={day.mintemp_c}
              maxWindSpeed={day.maxwind_kph}
              precipitation={day.totalprecip_mm}
              status={day.condition.text}
              statusIcon={day.condition.icon}
            />
          ))}
    </div>
  );
};

Forecast.propTypes = {
  pending: PropTypes.bool,
  forecast: PropTypes.array,
};

Forecast.defaultProps = {
  pending: false,
  forecast: [],
};

export default Forecast;
