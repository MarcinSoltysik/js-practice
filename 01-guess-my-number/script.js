'use strict';

const mysteryNumber = document.querySelector('.header__mystery-number');
const guessNumber = document.querySelector('.guess-section__input');
const checkNumber = document.querySelector('.guess-section__button');
const message = document.querySelector('.game-info-section__message');
const again = document.querySelector('.header__button--again');

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
    displayMessage('🫤 No number!');
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number! You WIN');
    mysteryNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    mysteryNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      infoHighScore.textContent = highScore;
    }
  } else if (guess !== secretNumber)
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😭 You lost the game.');
      displayScore(0);
    }
});

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  mysteryNumber.textContent = '?';
  guessNumber.value = '';
  body.style.backgroundColor = '#222';
  mysteryNumber.style.width = '15rem';
});
