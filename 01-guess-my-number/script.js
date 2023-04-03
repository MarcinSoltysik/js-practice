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
    displayMessage('🫤 No number! Enter a Number');
  } else if (guess === secretNumber) {
    displayMessage('😀 Correct Number! You WIN 🥳');
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '⬆️ Too hight!' : '⬇️ Too low!');
  } else {
    displayMessage('😭 You lost the game.');
  }
});
