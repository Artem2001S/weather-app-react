import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/Title';

import styles from './CurrentLocation.module.scss';

const CurrentLocation = ({
  pending,
  locationName,
  region,
  country,
  time,
  timeZone,
}) => {
  return (
    <div className={styles.Container}>
      {pending ? (
        'Loading...'
      ) : (
        <>
          <Title small>
            {country}, {region}, {locationName}
          </Title>
          <div className={styles.time}>
            {time}, {timeZone}
          </div>
        </>
      )}
    </div>
  );
};

CurrentLocation.propTypes = {
  locationName: PropTypes.string,
  region: PropTypes.string,
  country: PropTypes.string,
  time: PropTypes.string,
  timeZone: PropTypes.string,
};

CurrentLocation.defaultProps = {
  locationName: '',
  region: '',
  country: '',
  time: '',
  timeZone: '',
};

export default CurrentLocation;
