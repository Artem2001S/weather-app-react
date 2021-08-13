import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { requestAddressSuggestion } from 'api/dadata';
import { convertSuggestions } from 'utils/helpers';
import Container from 'components/Container';
import SuggestionsInput from 'components/SuggestionsInput';
import Button from 'components/Button';
import Message from 'components/Message';

import styles from './Home.module.scss';

const Home = () => {
  const history = useHistory();
  const [cityInput, setCityInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [message, setMessage] = useState('');

  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const handleCityInputChange = useCallback(
    (e) => {
      setCityInput(e.currentTarget.value);
      selectedSuggestion && setSelectedSuggestion(null);
    },
    [selectedSuggestion]
  );

  const handleSuggestionClick = useCallback((suggestion) => {
    setCityInput(suggestion.value);
    setSuggestions([]);
    setSelectedSuggestion(suggestion);
  }, []);

  useEffect(() => {
    const getSuggestions = async () => {
      const { data } = await requestAddressSuggestion(cityInput);
      const convertedSuggestions = convertSuggestions(data.suggestions);
      setSuggestions(convertedSuggestions);
    };

    !selectedSuggestion && getSuggestions();
  }, [cityInput, selectedSuggestion]);

  const handleCheckWeatherBtnClick = useCallback(
    () =>
      selectedSuggestion
        ? history.push(
            `/weather?lat=${selectedSuggestion.lat}&lon=${selectedSuggestion.lon}`
          )
        : setMessage('Choose city from drop down'),
    [history, selectedSuggestion]
  );

  return (
    <Container className={styles.HomeContainer}>
      {message && <Message>{message}</Message>}
      <div className={styles.Form}>
        <SuggestionsInput
          className={styles.Input}
          placeholder="City"
          value={cityInput}
          onChange={handleCityInputChange}
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
        <Button
          className={styles.Button}
          type="button"
          onClick={handleCheckWeatherBtnClick}
        >
          Check weather
        </Button>
      </div>
    </Container>
  );
};

export default React.memo(Home);
