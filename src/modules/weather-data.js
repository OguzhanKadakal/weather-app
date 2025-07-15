async function fetchWeatherData(cityName) {
  try {
    const API_KEY = '3X2GKSVWXJUECMJJ36QRVLJLX';
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=${API_KEY}&contentType=json`
    );
    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    throw error; 
  }
}

export { fetchWeatherData };
