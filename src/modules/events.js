import { fetchWeatherData } from './weather-data.js';

function setupSearchEvents() {
  const searchInput = document.querySelector('#search-input');
  const searchButton = document.querySelector('.search-button');

  const handleSearch = async () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      searchInput.value = '';
      await fetchWeatherData(query);
    }
  };

  searchButton.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
}

export { setupSearchEvents };
