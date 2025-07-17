import './styles.css' 
import { createDOM } from './modules/dom';
import { setupSearchEvents, toggleUnit } from './modules/events';

createDOM();
setupSearchEvents();
toggleUnit();