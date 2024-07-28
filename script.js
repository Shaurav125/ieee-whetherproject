const apiKey = "932daa9a06f5780e52431c40ac8516d0";

const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "weather.png";
      document.body.style.backgroundImage = "url('cloudbg.jpg')";
    }

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
      document.innerText="clear"
      document.body.style.backgroundImage = "url('clearsky.jpg')";
    }

    if (data.weather[0].main == "Rain") {
      weatherIcon.src = "rain.png";
      document.body.style.backgroundImage = "url('rainbg.jpg')";
    
    }

    if (data.weather[0].main == "Snow") {
      weatherIcon.src = "snow.png";
      document.body.style.backgroundImage = "url('snowbg.jpg')"
    }

    if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "drizzle.png";
      document.body.style.backgroundImage = "url('')"
    }

    if (data.weather[0].main == "Mist") {
      weatherIcon.src = "mist.png";
      document.body.style.backgroundImage = "url('mistbg.jpg')"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});