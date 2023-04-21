'use strict';
const key = '6ad0d5e302ac0d03fcc31a072356981f';

const inputCity = document.querySelector('.input');
function search(ev) {
  const phrase = ev.target.value;
  console.log(phrase);
}

inputCity.addEventListener('keyup', search);

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
