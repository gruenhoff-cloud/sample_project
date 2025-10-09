let xhr = new XMLHttpRequest();
let url = 'https://raw.githubusercontent.com/cjbatin/Swift4-Decoding-JSON-Using-Codable/master/WeatherForecast/StubData/londonWeather.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = () => {
  var data = xhr.response;
  var dataDiv = document.getElementById('city');

  var name = document.createElement('h2');
  name.textContent = data.name;
  
  var weatherDiv = document.createElement('h3');
  weatherDiv.textContent = `Weather: ${data.weather[0].main}`;

  var windDiv = document.createElement('h3');
  windDiv.textContent = `Wind Speed: ${data.wind.speed}`;

  dataDiv.appendChild(name);
  dataDiv.appendChild(weatherDiv);
  dataDiv.appendChild(windDiv);
};
xhr.send();
