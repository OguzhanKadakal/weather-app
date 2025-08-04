async function fetchWeatherData(cityName, unitGroup) {
  try {
    const API_KEY = '8MSX4HPB9FZ4A8FEKYTM79NLW';
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=${unitGroup}&key=${API_KEY}&contentType=json`
    );
    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error; 
  }
}

export { fetchWeatherData };
