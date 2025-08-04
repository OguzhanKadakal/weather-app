import './styles.css';
import { createDOM } from './modules/dom.js';
import { setupSearchEvents, toggleUnit, currentLocationDisplay } from './modules/events.js';

document.addEventListener('DOMContentLoaded', async () => {
  createDOM();
  setupSearchEvents();
  toggleUnit();
  await currentLocationDisplay();
});
