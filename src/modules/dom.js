import searchIconSvg from '../assets/tools/search.svg';
import spinnerSvg from '../assets/tools/eclipse.svg';
import noWeatherDataIcon from '../assets/message/no-weather-data.png';
import { format } from 'date-fns';

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

  const creditLink = document.createElement('a');
  creditLink.href = 'https://github.com/OguzhanKadakal';
  creditLink.textContent = 'Created by Oğuzhan Kadakal';
  creditLink.target = '_blank';
  creditLink.className = 'credit-link';
  footerElement.appendChild(creditLink);

  const spinner = document.createElement('img');
  spinner.src = spinnerSvg;
  spinner.alt = 'Spinner SVG';
  spinner.className = 'spinner';
  mainElement.appendChild(spinner);

  appElement.appendChild(headerElement);
  appElement.appendChild(mainElement);
  appElement.appendChild(footerElement);

  mainElement.appendChild(weatherInfoContainer);
}

//Dynamically loads weather ıcons
async function getWeatherIcon(iconName) {
  try {
    const icon = await import(`../assets/weather-icons/${iconName}.svg`);
    return icon.default;
  } catch {
    console.error(`Missing icon for ${iconName}`);
    return null;
  }
}

//Creates weather info elements
async function displayWeatherInfo(data) {
  const weatherInfoContainer = document.querySelector('#weather-info');
  weatherInfoContainer.innerHTML = '';

  if (!data) {
    const noDataImg = document.createElement('img');
    noDataImg.src = noWeatherDataIcon;
    noDataImg.alt = 'No weather data available';
    noDataImg.className = 'no-weather-data-icon';
    weatherInfoContainer.appendChild(noDataImg);
    return;
  }

  // Group address and date in a container
  const infoHeader = document.createElement('div');
  infoHeader.className = 'info-header';

  const resolvedAddress = document.createElement('h2');
  resolvedAddress.className = 'address';
  resolvedAddress.textContent = data.resolvedAddress;

  const today = document.createElement('h3');
  today.textContent = `${format(new Date(), 'dd MMMM yyyy')}`;
  today.className = 'today-date';

  infoHeader.append(resolvedAddress, today);

  const weatherDetails = document.createElement('div');
  weatherDetails.className = 'weather-details';

  const iconName = data.currentConditions.icon;
  const iconSrc = await getWeatherIcon(iconName);
  const weatherImg = document.createElement('img');
  weatherImg.className = 'weather-icon';
  weatherImg.alt = iconName;
  if (iconSrc) {
    weatherImg.src = iconSrc;
  }

  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'current-details';

  const temp = document.createElement('h2');
  const unit = document.querySelector('.toggle-temp').dataset.unit;
  temp.textContent =
    unit === 'metric' ? `${data.currentConditions.temp} °C` : `${data.currentConditions.temp} °F`;
  temp.className = 'temperature';

  const windSpeed = document.createElement('p');
  windSpeed.className = 'wind-speed';
  if (unit === 'metric') {
    windSpeed.textContent = `Wind: ${data.currentConditions.windspeed} km/h`;
  } else {
    windSpeed.textContent = `Wind: ${data.currentConditions.windspeed} mph`;
  }

  const humidity = document.createElement('p');
  humidity.textContent = `Humidity: ${data.currentConditions.humidity}`;
  humidity.className = 'humidity';

  detailsDiv.append(temp, windSpeed, humidity);

  const forecastContainer = document.createElement('div');
  forecastContainer.className = 'forecast-container';

  data.days.slice(1, 6).forEach(async (forecastDay, i) => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'forecast-day';

    const date = new Date(forecastDay.datetime);
    const dayLabel = document.createElement('span');
    dayLabel.className = 'forecast-date';
    if (i === 0) {
      dayLabel.textContent = 'Tomorrow';
    } else {
      dayLabel.textContent = format(date, 'EEE, dd MMM');
    }

    const iconSrc = await getWeatherIcon(forecastDay.icon);
    const iconImg = document.createElement('img');
    iconImg.className = 'forecast-icon';
    iconImg.alt = forecastDay.icon;
    if (iconSrc) {
      iconImg.src = iconSrc;
    }

    const tempSpan = document.createElement('span');
    tempSpan.className = 'forecast-temp';
    tempSpan.textContent = unit === 'metric' ? `${forecastDay.temp} °C` : `${forecastDay.temp} °F`;

    dayDiv.append(dayLabel, iconImg, tempSpan);
    forecastContainer.appendChild(dayDiv);
  });

  weatherDetails.append(weatherImg, detailsDiv);

  weatherInfoContainer.append(infoHeader, weatherDetails, forecastContainer);
}

export { createDOM, displayWeatherInfo };
