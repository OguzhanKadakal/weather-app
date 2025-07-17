import searchIconSvg from '../assets/tools/search.svg';

function createDOM() {
  const appElement = document.querySelector('#app');
  const headerElement = document.createElement('header');
  headerElement.id = 'header';
  headerElement.className = 'header';

  const logo = document.createElement('h1');
  logo.className = 'logo';
  logo.textContent = 'Aeris Weather App';

  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search city...';
  searchInput.className = 'search-box';
  searchInput.id = 'search-input';

  const searchButton = document.createElement('button');
  searchButton.type = 'button';
  searchButton.className = 'search-button';
  const searchIcon = document.createElement('img');
  searchIcon.src = searchIconSvg;
  searchIcon.alt = 'Search';
  searchIcon.className = 'search-icon';
  searchButton.appendChild(searchIcon);

  const searchInputGroup = document.createElement('div');
  searchInputGroup.className = 'search-input-group';
  searchInputGroup.appendChild(searchInput);
  searchInputGroup.appendChild(searchButton);

  const toggleButton = document.createElement('button');
  toggleButton.type = 'button';
  toggleButton.className = 'toggle-temp celsius';
  toggleButton.textContent = '°C / °F';
  toggleButton.dataset.unit = 'metric';

  searchContainer.appendChild(searchInputGroup);

  headerElement.appendChild(logo);
  headerElement.appendChild(searchContainer);
  headerElement.appendChild(toggleButton);

  const mainElement = document.createElement('main');
  mainElement.id = 'main';
  mainElement.className = 'main';

  const footerElement = document.createElement('footer');
  footerElement.id = 'footer';
  footerElement.className = 'footer';

  const weatherInfoContainer = document.createElement('div');
  weatherInfoContainer.id = 'weather-info';
  weatherInfoContainer.className = 'weather-info-container';

  appElement.appendChild(headerElement);
  appElement.appendChild(mainElement);
  appElement.appendChild(footerElement);

  mainElement.appendChild(weatherInfoContainer);
}

function displayWeatherInfo(data) {
  const weatherInfoContainer = document.querySelector('#weather-info');
  weatherInfoContainer.innerHTML = '';

  if (!data) {
    weatherInfoContainer.innerHTML = '<p>No weather data available</p>';
    return;
  }

  const resolvedAddress = document.createElement('h2');
  resolvedAddress.className = 'address';
  resolvedAddress.textContent = data.resolvedAddress;

  const temp = document.createElement('h2');

  const unit = document.querySelector('.toggle-temp').dataset.unit;
  temp.textContent = unit === 'metric'
    ? `${data.currentConditions.temp} °C`
    : `${data.currentConditions.temp} °F`;
  resolvedAddress.className = 'tempature';

  weatherInfoContainer.append(resolvedAddress, temp);
}

export { createDOM, displayWeatherInfo };
