import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title';

import styles from './CurrentForecast.module.scss';

const CurrentForecast = ({
  pending,
  temperature,
  humidity,
  precipitation,
  status,
  statusIcon,
  windSpeed,
}) => {
  return (
    <div className={styles.root}>
      {pending ? (
        'Loading...'
      ) : (
        <div className={styles.Container}>
          <img src={statusIcon} alt="Weather" />
          <Title small>
            {status}, {temperature} °C
          </Title>
          <Title small className={styles.AlignStart}>
            Humidity: {humidity}%
          </Title>
          <Title small className={styles.AlignStart}>
            Precipitation: {precipitation} mm
          </Title>
          <Title small className={styles.AlignStart}>
            Wind speed: {windSpeed} km/h
          </Title>
        </div>
      )}
    </div>
  );
};

CurrentForecast.propTypes = {
  pending: PropTypes.bool,
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  precipitation: PropTypes.number,
  status: PropTypes.string,
  statusIcon: PropTypes.string,
  windSpeed: PropTypes.number,
};

CurrentForecast.defaultProps = {
  pending: false,
  temperature: 0,
  humidity: 0,
  precipitation: 0,
  status: '',
  statusIcon: '',
  windSpeed: 0,
};

export default CurrentForecast;
