function showWeatherDetails(event) {
  event.preventDefault();
  const lat = document.getElementById('lat').value;
  const apiKey = 'c66050100176ff98404151897aee2223'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                               <p>Temperature: ${data.main.temp} &#8451;</p>
                               <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Failend to fetch weather. Please try again.</p>`;
    });
}

function showWeatherDetails1(event) {
  event.preventDefault();
  const lat = document.getElementById('lat').value;
  const lon = document.getElementById('lon').value;
  const apiKey = 'c66050100176ff98404151897aee2223'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                               <p>Temperature: ${data.main.temp} &#8451;</p>
                               <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Failend to fetch weather. Please try again.</p>`;
    });
}


document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
document.getElementById('weatherForm1').addEventListener('submit', showWeatherDetails1);
