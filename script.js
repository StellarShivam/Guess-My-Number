'use strict';
let guess = document.querySelector('.guess');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let again = document.querySelector('.again');
let a = 0;
let randomNumber = Math.floor(Math.random() * 20 + 1);
if (localStorage.getItem('highscore')) {
    highscore.innerHTML = localStorage.getItem('highscore');
}

again.addEventListener('click', function () {
    location.reload();
})

check.addEventListener('click', function () {
    let guessValue = guess.value;

    if (!guessValue) {
        alert("Please! enter a number!");
    }
    else {

        if (guessValue == randomNumber) {
            message.innerHTML = '🎉 Correct number!';
            number.innerHTML = randomNumber;
            document.querySelector('body').style.backgroundColor = 'green';
            if (Number(score.innerHTML) > Number(highscore.innerHTML)) {
                highscore.innerHTML = Number(score.innerHTML);
            }
            localStorage.setItem('highscore', Number(highscore.innerHTML));
        }
        else if (guessValue > randomNumber) {
            message.innerHTML = '📈 Too high!';
        }
        else {
            message.innerHTML = '📉 Too low!';
        }
        if (guessValue != randomNumber) {
            if (a = 0) {
                score.innerHTML = '20';
                a = a + 1;
            }
            else {
                score.innerHTML = Number(score.innerHTML) - 1;
            }
        }
    }
    if (Number(score.innerHTML) == 0) {
        message.innerHTML = '😞 Sorry! You lost the game';
    }
    else if (Number(score.innerHTML) < 0) {
        location.reload();
    }
})

