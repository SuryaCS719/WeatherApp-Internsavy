const apiKey = '40c15b64d02441dd900141144231606';

// Function to fetch weather data
async function fetchWeatherData(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
  const data = await response.json();
  return data;
}

// Function to update the HTML with weather information
function updateWeatherInfo(weatherData) {
  document.getElementById('location').textContent = `Location: ${weatherData.location.name}`;
  document.getElementById('temperature').textContent = `Temperature: ${weatherData.current.temp_c} °C`;
  document.getElementById('humidity').textContent = `Humidity: ${weatherData.current.humidity}%`;
  document.getElementById('wind-speed').textContent = `Wind Speed: ${weatherData.current.wind_kph} km/h`;
  document.getElementById('conditions').textContent = `Conditions: ${weatherData.current.condition.text}`;
}

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();
  const location = document.getElementById('location-input').value;
  console.log('Submitted Location:', location);
  const weatherData = await fetchWeatherData(location);
  console.log('Weather Data:', weatherData);
  updateWeatherInfo(weatherData);
}

// Add event listener to the form
document.getElementById('weather-form').addEventListener('submit', handleSubmit);
