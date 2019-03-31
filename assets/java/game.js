var letterList = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wrongGuesses = [];

var letter = null;
var wins = 0;
var losses = 0;
var guesses = 0;

function reset() {
    guesses = 10;
    wrongGuesses = [];
    letter = letterList[Math.floor(Math.random() * letterList.length)];
    console.log('The letter is: ' + letter);
}

function updateDisplay() {
    $('.winCount').text(wins);
    $('.lossCount').text(losses);
    $('.guessesLeft').text(guesses);
    $('.yourGuesses').text(wrongGuesses.join(' '));
}

// onkeyup fxn
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (userGuess == letter) {
        wins++;
        reset();
    } else {
        guesses--;
        wrongGuesses.push(userGuess);
        if( guesses <= 0) {
            losses++;
            reset();
        }
    }
    updateDisplay();
}

reset();
updateDisplay();
