import axios from 'axios';

const BASE_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest';
const allCountries = [{ country: '*' }];
const fromBound = { value: 'city' };
const toBound = { value: 'city' };

const dadataInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Token 962212815204bb16ff0ae9a1142a35bc7bc572eb`,
  },
});

export const requestAddressSuggestion = (
  query,
  count = 10,
  language = 'en',
  locations = allCountries,
  from_bound = fromBound,
  to_bound = toBound
) =>
  dadataInstance.post('/address', {
    query,
    locations,
    language,
    from_bound,
    to_bound,
    count,
  });
