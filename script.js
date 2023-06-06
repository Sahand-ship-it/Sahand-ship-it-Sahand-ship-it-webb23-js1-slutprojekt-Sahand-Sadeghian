

document.getElementById("weatherForm").addEventListener("submit", function(event) {
    getWeather(event);
  });
  
  function getWeather(event) {
    event.preventDefault();
  
    var city = document.getElementById("cityInput").value;
    var apiKey = "7205d155f8040768b51763049df5e52b";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
  
    fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Kunde inte hitta vädret för den angivna staden.");
        }
      })
      .then(function(data) {
        var weatherInfo = "Vädret i " + data.name + ": " + data.weather[0].description;
        weatherInfo += "<br>Temperatur: " + (data.main.temp - 273.15).toFixed(1) + " °C";
        weatherInfo += "<br>Vindhastighet: " + data.wind.speed + " m/s";
        weatherInfo += "<br>Väderikon: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>";
  
        document.getElementById("weatherInfo").innerHTML = weatherInfo;
        document.getElementById("errorMessage").innerHTML = "";
      })
      .catch(function(error) {
        document.getElementById("weatherInfo").innerHTML = "";
        document.getElementById("errorMessage").innerHTML = error.message;
      });
  }
  