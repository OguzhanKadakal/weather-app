async function fetchLocation() {
  try {
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    if (!ipResponse.ok) {
      throw new Error('Could not fetch IP');
    }
    const ipData = await ipResponse.json();

    const locationResponse = await fetch(`http://ip-api.com/json/${ipData.ip}`);
    if (!locationResponse.ok) {
      throw new Error('Could not fetch location');
    }
    const locationData = await locationResponse.json();

    return `${locationData.city}, ${locationData.country}`;
  } catch (error) {
    console.error('Location fetch error:', error);
    return 'New York';
  }
}

export { fetchLocation };
