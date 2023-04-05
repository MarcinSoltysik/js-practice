'use strict';

const mysteryNumber = document.querySelector('.header__mystery-number');
const guessNumber = document.querySelector('.guess-section__input');
const checkNumber = document.querySelector('.guess-section__button');
const message = document.querySelector('.game-info-section__message');
const again = document.querySelector('.header__button');

const infoScore = document.querySelector('.game-info-section__score-value');
const infoHighScore = document.querySelector(
  '.game-info-section__highscore-value'
);

const body = document.querySelector('body');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (notice) {
  message.textContent = notice;
};
const displayScore = function (score) {
  infoScore.textContent = score;
};

checkNumber.addEventListener('click', function () {
  const guess = Number(guessNumber.value);

  if (!guess) {
    displayMessage('🫤 No number! Enter a Number');
  } else if (guess === secretNumber) {
    displayMessage('😀 Correct Number! You WIN 🥳');
    mysteryNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    mysteryNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      infoHighScore.textContent = highScore;
    }
  } else if (guess !== secretNumber)
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too hight!' : '⬇️ Too low!');
      score--;
      // Zrób to w funkcji
      // infoScore.textContent = score;
      displayScore(score);
    } else {
      displayMessage('😭 You lost the game.');
      // Zrób to w funkcji
      // infoScore.textContent = 0;
      displayScore(0);
    }
});
