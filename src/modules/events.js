import { fetchWeatherData } from './weather-data.js';
import { displayWeatherInfo } from './dom.js';

let currentCity = null;

function setupSearchEvents() {
  const searchInput = document.querySelector('#search-input');
  const searchButton = document.querySelector('.search-button');
  const toggleTempButton = document.querySelector('.toggle-temp');
  


  const handleSearch = async () => {
    const spinner = document.querySelector('.spinner');
    spinner ? spinner.style.display = 'block' : null;
    
    const query = searchInput.value.trim().toLowerCase();
    const unitGroup = toggleTempButton.dataset.unit;
    if ((query, unitGroup)) {
      searchInput.value = '';
      try {
        const weatherData = await fetchWeatherData(query, unitGroup);
        currentCity = query;
        displayWeatherInfo(weatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        displayWeatherInfo(null);
      } finally {
        spinner ? spinner.style.display = 'none' : null;
      }
    }
  };

  searchButton.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
}

function toggleUnit() {
  const toggleTempButton = document.querySelector('.toggle-temp');

  toggleTempButton.addEventListener('click', async () => {
    if (toggleTempButton.dataset.unit === 'metric') {
      toggleTempButton.dataset.unit = 'us';
      toggleTempButton.className = 'toggle-temp fahrenheit';
    } else {
      toggleTempButton.dataset.unit = 'metric';
      toggleTempButton.className = 'toggle-temp celsius';
    }
    if (currentCity) {
      try {
        const unitGroup = toggleTempButton.dataset.unit;
        const weatherData = await fetchWeatherData(currentCity, unitGroup);
        displayWeatherInfo(weatherData);
      } catch (error) {
        console.error('Error refreshing weather data:', error);
      }
    }
  });
}

export { setupSearchEvents, toggleUnit };
