import React, { useState, useCallback, useEffect } from 'react';
import Container from 'components/Container';
import SuggestionsInput from 'components/SuggestionsInput';
import { requestAddressSuggestion } from 'api/dadata';

import styles from './Home.module.scss';

const Home = () => {
  const [cityInput, setCityInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionSelected, setIsSuggestionSelected] = useState(false);

  const handleCityInputChange = useCallback(
    (e) => {
      setCityInput(e.currentTarget.value);
      isSuggestionSelected && setIsSuggestionSelected(false);
    },
    [isSuggestionSelected]
  );

  const handleSuggestionClick = useCallback((value) => {
    setCityInput(value);
    setSuggestions([]);
    setIsSuggestionSelected(true);
  }, []);

  useEffect(() => {
    const getSuggestions = async () => {
      const { data } = await requestAddressSuggestion(cityInput, 10);
      setSuggestions(data.suggestions);
    };

    !isSuggestionSelected && getSuggestions();
  }, [cityInput, isSuggestionSelected]);

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
