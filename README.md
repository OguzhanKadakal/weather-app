# Aeris Weather App

A modern, responsive weather application built with vanilla JavaScript that provides detailed weather forecasts and automatic location detection. The app uses the [Visual Crossing Weather API](https://www.visualcrossing.com/) to deliver accurate weather data.

## Features

### 🌍 **Automatic Location Detection**

- Automatically detects your current location on app load
- Uses IP-based geolocation for seamless user experience
- Fallback to default location if detection fails

### 🔍 **City Search**

- Search for weather in any city worldwide
- Real-time search with instant results
- Clean, intuitive search interface with search icon

### 🌡️ **Temperature Unit Toggle**

- Toggle between Celsius (°C) and Fahrenheit (°F)
- Visual feedback with color-coded toggle button
- Automatic data refresh when switching units

### 📅 **5-Day Weather Forecast**

- Current weather conditions with detailed metrics
- 5-day forecast with daily predictions
- Tomorrow highlighted for easy identification

### 📊 **Detailed Weather Information**

For current conditions and forecasts, view:

- **Temperature** (°F/°C)
- **Wind Speed** (mph/km/h based on unit selection)
- **Humidity** percentage
- **Weather Icons** representing current conditions
- **Location** with resolved address
- **Current Date** display

### 🎨 **Responsive Design**

- Mobile-first responsive layout
- Adaptive gradient backgrounds
- Optimized for all screen sizes (desktop, tablet, mobile)
- Clean, modern UI with smooth transitions

### ⚡ **Loading States**

- Visual loading spinner during API calls
- Smooth transitions between different weather data
- Error handling with fallback displays

## Technical Features

### 🏗️ **Architecture**

- Modular ES6 JavaScript structure
- Separation of concerns with dedicated modules:
  - `dom.js` - DOM manipulation and UI creation
  - `events.js` - Event handling and user interactions
  - `weather-data.js` - Weather API integration
  - `location-data.js` - Location detection services

### 🎯 **APIs Used**

- **Visual Crossing Weather API** - Weather data and forecasts
- **ipify.org** - IP address detection
- **ip-api.com** - IP-to-location conversion

### 🖼️ **Weather Icons**

This app uses [Weather Icons](https://github.com/basmilius/weather-icons) by basmilius to provide beautiful, consistent visual representations of weather conditions throughout the interface.

### 🎨 **Styling**

- CSS custom properties for consistent theming
- Responsive design with mobile-optimized layouts
- Modern gradient backgrounds with adaptive behavior
- Smooth animations and hover effects

## Installation & Usage

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Open your browser to `http://localhost:8080`

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Mobile)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

---

**Created by [Oğuzhan Kadakal](https://github.com/OguzhanKadakal)**
