import React, { useState, useCallback, useEffect } from 'react';
import Container from 'components/Container';
import SuggestionsInput from 'components/SuggestionsInput';
import { requestAddressSuggestion } from 'api/dadata';

import styles from './Home.module.scss';
import { convertSuggestions } from 'utils/helpers';

const Home = () => {
  const [cityInput, setCityInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
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

  return (
    <Container>
      <SuggestionsInput
        className={styles.Input}
        placeholder="City"
        value={cityInput}
        onChange={handleCityInputChange}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
      />
    </Container>
  );
};

export default React.memo(Home);
