import React from 'react';
import { useSelector } from 'react-redux';
import {
  countrySelector,
  isPendingSelector,
  localTimeSelector,
  locationNameSelector,
  regionSelector,
  timezoneSelector,
} from 'store/models/weather/selectors';
import CurrentLocation from './CurrentLocation';

const CurrentLocationContainer = () => {
  const pending = useSelector(isPendingSelector);
  const locationName = useSelector(locationNameSelector);
  const region = useSelector(regionSelector);
  const country = useSelector(countrySelector);

  const timeZone = useSelector(timezoneSelector);
  const time = useSelector(localTimeSelector);

  return (
    <CurrentLocation
      pending={pending}
      locationName={locationName}
      region={region}
      country={country}
      timeZone={timeZone}
      time={time}
    />
  );
};

export default CurrentLocationContainer;
