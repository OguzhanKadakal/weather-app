import './styles.css' 
import { fetchWeatherData } from './modules/weather-data';
import { createDOM } from './modules/dom';
createDOM();
fetchWeatherData();