async function fetchWeatherData() {
  try {
    const cityName = 'istanbul';
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=3X2GKSVWXJUECMJJ36QRVLJLX&contentType=json`
    );
    if(!response.ok) {
      throw new Error('Could not fetch resource');
    }
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log(error);
  }
}

export { fetchWeatherData };