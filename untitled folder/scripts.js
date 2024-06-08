async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '1aae5919975175c860621761593c35b0';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('City not found');
      }

      const data = await response.json();
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      document.getElementById('weatherResult').innerHTML = `
          <h2>Weather in ${city}</h2>
          <p><strong>Description:</strong> ${weatherDescription}</p>
          <p><strong>Temperature:</strong> ${temperature}°C</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
          <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
      `;
  } catch (error) {
      if (error.message === 'City not found') {
          document.getElementById('weatherResult').innerHTML = `
              <p>City not found. Please enter a specific city name.</p>
          `;
      } else {
          document.getElementById('weatherResult').innerHTML = `
              <p>Something went wrong. Please try again later.</p>
          `;
      }
  }
}

