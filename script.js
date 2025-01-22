'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// document.querySelector('.number').textContent = secretNumber; // displays secret number
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // code only executes when condition is true
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('CORRECT NUMBER!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber; // displays secret number

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'TOO HIGH!' : 'TOO LOW');
      score--; // score = score - 1;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      displayMessage('YOU LOST THE GAME!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
    // When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'TOO HIGH!';
    //     score--; // score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'YOU LOST THE GAME!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   // When guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'TOO LOW!';
    //     score--; // score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'YOU LOST THE GAME!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
}); // add function expression to addeventlistener method

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
