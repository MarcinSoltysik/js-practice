'use strict';

const mysteryNumber = document.querySelector('.header__mystery-number');
const guessNumber = document.querySelector('.guess-section__input');
const checkNumber = document.querySelector('.guess-section__button');
const message = document.querySelector('.game-info-section__message');

let secretNumber = Math.floor(Math.random() * 20) + 1;
mysteryNumber.textContent = secretNumber;

const displayMessage = function (notice) {
  message.textContent = notice;
};

checkNumber.addEventListener('click', function () {
  const guess = Number(guessNumber.value);

  if (!guess) {
    // message.textContent = '🫤 No number! Enter a Number';
    displayMessage('🫤 No number! Enter a Number');
  } else if (guess === secretNumber) {
    // message.textContent = '😀 Correct Number! You WIN 🥳';
    displayMessage('😀 Correct Number! You WIN 🥳');
  } else if (guess > secretNumber) {
    // message.textContent = '⬆️ Too hight!';
    displayMessage('⬆️ Too hight!');
  } else if (guess < secretNumber) {
    // message.textContent = '⬇️ Too low!';
    displayMessage('⬇️ Too low!');
  } else {
    // message.textContent = '😭 You lost the game.';
    displayMessage('😭 You lost the game.');
  }
});
