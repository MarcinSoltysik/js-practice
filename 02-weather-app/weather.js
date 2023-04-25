'use strict';
const key = '6ad0d5e302ac0d03fcc31a072356981f';

const inputCity = document.querySelector('.input');

async function search() {
  const phrase = inputCity.value;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${phrase}&limit=5&appid=${key}`
  );
  const data = await response.json();
  console.log(data);
  const ul = document.querySelector('.input--list');
  ul.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    console.log(i);
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

inputCity.addEventListener('keyup', debounceSearch);

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
