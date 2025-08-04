import { fetchWeatherData } from './weather-data.js';
import { displayWeatherInfo } from './dom.js';
import { fetchLocation } from './location-data.js';

let currentCity = null;

async function currentLocationDisplay() {
  const toggleTempButton = document.querySelector('.toggle-temp');
  const spinner = document.querySelector('.spinner');

  if (spinner) spinner.style.display = 'block';

  try {
    if (!toggleTempButton.dataset.unit) {
      toggleTempButton.dataset.unit = 'us';
      toggleTempButton.className = 'toggle-temp fahrenheit';
    }

    const unitGroup = toggleTempButton.dataset.unit;
    const location = await fetchLocation();

    if (location) {
      console.log('Fetching weather for location:', location);
      const weatherData = await fetchWeatherData(location, unitGroup);
      currentCity = location;
      displayWeatherInfo(weatherData);
    } else {
      throw new Error('Could not determine location');
    }
  } catch (error) {
    console.error('Error fetching location weather data:', error);
    displayWeatherInfo(null);
  } finally {
    if (spinner) spinner.style.display = 'none';
  }
}

function setupSearchEvents() {
  const searchInput = document.querySelector('#search-input');
  const searchButton = document.querySelector('.search-button');
  const toggleTempButton = document.querySelector('.toggle-temp');

  const handleSearch = async () => {
    const spinner = document.querySelector('.spinner');
    if (spinner) spinner.style.display = 'block';

    const query = searchInput.value.trim().toLowerCase();

    if (!toggleTempButton.dataset.unit) {
      toggleTempButton.dataset.unit = 'us';
      toggleTempButton.className = 'toggle-temp fahrenheit';
    }

    const unitGroup = toggleTempButton.dataset.unit;

    if (query) {
      searchInput.value = '';
      try {
        const weatherData = await fetchWeatherData(query, unitGroup);
        currentCity = query;
        displayWeatherInfo(weatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        displayWeatherInfo(null);
      } finally {
        if (spinner) spinner.style.display = 'none';
      }
    } else {
      if (spinner) spinner.style.display = 'none';
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

  if (!toggleTempButton.dataset.unit) {
    toggleTempButton.dataset.unit = 'us';
    toggleTempButton.className = 'toggle-temp fahrenheit';
  }

  toggleTempButton.addEventListener('click', async () => {
    const spinner = document.querySelector('.spinner');
    if (spinner) spinner.style.display = 'block';

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
      } finally {
        if (spinner) spinner.style.display = 'none';
      }
    } else {
      if (spinner) spinner.style.display = 'none';
    }
  });
}

export { setupSearchEvents, toggleUnit, currentLocationDisplay };
