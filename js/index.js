const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let nhan = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativas:' + value
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if (!kick) {
        alert('Digite algum valor!')
        return;
    };

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if (numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabens, Você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#FF0000';
        result.style.color = '#000';
        status.style.color = '#FF0000';
        clear();
    } else if (numberDrawn > kick) {
        status.innerHTML = 'O número é maior!';
        status.style.color = '#FF0000';
        clear();
    } else if (numberDrawn < kick) {
        status.innerHTML = 'O número é menor!';
        status.style.color = '#FF0000';
        clear();
    }
};

function playAgain() {
    document.getElementById('bntRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};