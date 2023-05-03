"use strict";
const key = "6ad0d5e302ac0d03fcc31a072356981f";

const inputCity = document.querySelector(".input");

async function search() {
  const phrase = inputCity.value;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${phrase}&limit=5&appid=${key}`
  );
  const data = await response.json();
  // console.log(data);
  const ul = document.querySelector(".input--list");
  ul.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    // console.log(i);
    const { name, lat, lon, country } = data[i];
    ul.innerHTML += `<li
    data-lat="${lat}"
    data-lon="${lon}"
    data-name="${name}"
    > ${name} <span>${country}</span></li>`;
  }
}

const debounceSearch = _.debounce(() => {
  search();
}, 600);

inputCity.addEventListener("keyup", debounceSearch);

async function showWeather(lat, lon, name) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
  );
  const data = await response.json();
  console.log(data);
  console.log(data.name, data.main.temp);

  const temp = data.main.temp;
  const feelsLike = data.main.feels_like;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;
  console.log(temp, feelsLike, humidity, wind, icon, description);
}

document.body.addEventListener("click", function (ev) {
  console.log(ev);

  const li = ev.target;
  const { lat, lon, name } = li.dataset;
  console.log(lat);
  if (!lat) {
    return;
  }

  showWeather(lat, lon, name);
});

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
