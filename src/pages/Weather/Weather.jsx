import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchWeather } from 'store/models/weather';
import CurrentForecast from './CurrentForecast';
import CurrentLocation from './CurrentLocation';
import Container from 'components/Container';
import Title from 'components/Title';
import Button from 'components/Button';

import styles from './Weather.module.scss';

const Weather = () => {
  const { lat, lon } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather({ lat, lon }));
  }, [dispatch, lat, lon]);

  return (
    <Container className={styles.Container}>
      <Title centered>Forecast</Title>
      <Button to="/">Check for another place</Button>
      <CurrentLocation />
      <CurrentForecast />
    </Container>
  );
};

export default React.memo(Weather);
