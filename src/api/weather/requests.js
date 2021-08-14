import axios from 'axios';

const API_KEY = 'da732e4270e440178ba183403212207';
const BASE_URL = 'http://api.weatherapi.com/v1';

const weatherInstance = axios.create({
  baseURL: BASE_URL,
});

export const currentForecastRequest = (lat, lon) =>
  weatherInstance.get(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5`
  );
