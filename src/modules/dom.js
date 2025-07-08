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
  searchInput.className = 'search-input';

  const searchButton = document.createElement('button');
  searchButton.type = 'button';
  searchButton.className = 'search-button';
  searchButton.textContent = 'Search';

  const searchInputGroup = document.createElement('div');
  searchInputGroup.className = 'search-input-group';
  searchInputGroup.appendChild(searchInput);
  searchInputGroup.appendChild(searchButton);

  const toggleButton = document.createElement('button');
  toggleButton.type = 'button';
  toggleButton.className = 'toggle-temp';
  toggleButton.textContent = '°C / °F';

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);
  searchContainer.appendChild(toggleButton);

  headerElement.appendChild(logo);
  headerElement.appendChild(searchContainer);

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

export { createDOM };
