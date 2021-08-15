import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title';

import styles from './ForecastDay.module.scss';

const ForecastDay = ({
  date,
  maxT,
  minT,
  maxWindSpeed,
  precipitation,
  status,
  statusIcon,
}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Date}>{date}</div>
      <div className={styles.Top}>
        <div className={styles.IconBackground}>
          <img src={statusIcon} alt="status" />
        </div>
        <Title className={styles.Status} white small>
          {status}
        </Title>
        <div className={styles.Info}>
          <div className={styles.InfoItem}>Maximum temperature: {maxT} °C</div>
          <div className={styles.InfoItem}>Minimum temperature: {minT} °C</div>
          <div className={styles.InfoItem}>
            Maximum wind speed: {maxWindSpeed} km/h
          </div>
          <div className={styles.InfoItem}>
            Precipitation {precipitation} mm
          </div>
        </div>
      </div>
    </div>
  );
};

ForecastDay.propTypes = {
  date: PropTypes.string,
  maxT: PropTypes.number,
  minT: PropTypes.number,
  maxWindSpeed: PropTypes.number,
  precipitation: PropTypes.number,
  status: PropTypes.string,
  statusIcon: PropTypes.string,
};

ForecastDay.defaultProps = {
  date: '',
  maxT: 0,
  minT: 0,
  maxWindSpeed: 0,
  precipitation: 0,
  status: '',
  statusIcon: '',
};

export default React.memo(ForecastDay);
