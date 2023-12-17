let randomNumber = parseInt(Math.random() * 100 + 1);

const Submit = document.querySelector('#subt');
const useInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

//use je value gulo diche sei value jano ar jano na dai tai 'prevGuess' deowa
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    Submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(useInput.value);
        console.log(guess);
        validteGuess(guess)
    })
}

function validteGuess(guess) {
    // 1. ai ta deora reason player real number diche na ki onno kono value ?
    // 2. player je value ta diche seta 1 er theke choto na to ?
    // 3.player je value ta diche sete 100 er theke boro na to ?
    if (isNaN(guess)) {
        alert('please enter a valid Number');
    } else if (guess < 1) {
        alert('please enter a value bigger then 1');
    } else if (guess > 100) {
        alert('please enter a value smaller then 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // 1. player je value ta diche se ta ki low, high or correct ki na
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is Too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is Too High`);
    }
}

function displayGuess(guess) {
    // 1. it will clean prev value
    useInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numGuess ++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    // ai function ta directly dom er sathe connected thekbe
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;

}

function endGame() {
    useInput.value = '';
    useInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<button id='newGame'>Start new game</button>`;
    startOver.appendChild(p);
    playGame = false
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        useInput.removeAttribute('disabled');
        startOver.removeChild(p); 
        displayMessage(''); 
        playGame = true;
    })
}