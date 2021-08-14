import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchWeather } from 'store/models/weather';
import Container from 'components/Container';

const Weather = () => {
  const { lat, lon } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather({ lat, lon }));
  }, [dispatch, lat, lon]);

  return <Container>Weather</Container>;
};

export default React.memo(Weather);
