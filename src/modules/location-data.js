async function fetchLocation() {
  try {
    const locationResponse = await fetch('https://ipapi.co/json/');
    if (!locationResponse.ok) {
      throw new Error('Could not fetch location');
    }
    const locationData = await locationResponse.json();

    return `${locationData.city}, ${locationData.country_name}`;
  } catch (error) {
    console.error('Location fetch error:', error);
    return 'New York';
  }
}

export { fetchLocation };