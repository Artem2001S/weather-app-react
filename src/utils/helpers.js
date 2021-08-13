export const convertSuggestions = (suggestions) =>
  suggestions.map((suggestion) => ({
    value: `${suggestion.data.city}, ${suggestion.data.country}`,
    lat: suggestion.data.geo_lat,
    lon: suggestion.data.geo_lon,
  }));
