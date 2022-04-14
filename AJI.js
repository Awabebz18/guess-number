'use strict'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
//
// document.querySelector('.number').textContent = 13;
// // document.querySelector('.Score').textContent = 10;
//
// console.log(document.querySelector('.guess').value);
// var aji =  document.querySelector(('.guess').value);
// console.log(aji);

// const x = function () {
//   console.log(23);
// };

let secretNumber = Math.trunc(Math.random() * 25) + 1;

let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent =secretNumber;

document.querySelector('.check').addEventListener ('click', function () {
const guess = document.querySelector('.guess').value;
console.log(guess, typeof guess, secretNumber);

// when there is no input
if (!guess) {
   document.querySelector('.message').textContent = '⛔️ No Number!';

   // when player wins
 } else if (guess == secretNumber) {
   document.querySelector('.message').textContent = '🎉 Correct Number!';
   document.querySelector('.number').textContent =secretNumber;

    document.querySelector('body').style.
    backgroundColor = 'purple';
    document.querySelector('.number').style.width = '30rem';

if (score > highscore) {
  highscore = score;
  document.querySelector('.highscore').textContent = highscore;
}

// when guess is too high
 }else if (guess > secretNumber) {
   if (score > 0) {
   document.querySelector('.message').textContent = '📈 Too high!'
   score--;
   document.querySelector('.score').textContent = score;

  }else {
   document.querySelector('.message').textContent = '💥 You lost the game!';
  }

// when guess is too low
 }else if (guess < secretNumber) {
  document.querySelector('.message').textContent = '📉 Too low!'
  score--;
  document.querySelector('.score').textContent = score;
}
});

document. querySelector('.again').addEventListener ('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.
  backgroundColor = 'pink';
  document.querySelector('.number').style.width = '15rem';

});
