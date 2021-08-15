import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchWeather } from 'store/models/weather';
import Container from 'components/Container';
import Title from 'components/Title';
import Button from 'components/Button';
import CurrentForecast from './CurrentForecast';

const Weather = () => {
  const { lat, lon } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <Container>
      <Title centered>Forecast</Title>
      <Button to="/">Check for another place</Button>
      <CurrentForecast />
    </Container>
  );
};

export default React.memo(Weather);
