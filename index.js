  function displayTemperature (response){

    let temperatureElement = document.querySelector ("#temperature");
      let cityElement = document.querySelector("#city");
        let descriptionElement = document.querySelector("#description");
          let humidityElement = document.querySelector("#humidity");
            let windElement = document.querySelector("#wind");
              let dateElement = document.querySelector("#date");





temperatureElement.innerHTML = Math.round (response.data.main.temp);
  cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
      dateElement.innerHTML = formatDate(response.data.dt * 1000);




  }
  let city = "Lviv";
  let apiKey = "7dc301a446bb9379190bcbafb3374dfc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);