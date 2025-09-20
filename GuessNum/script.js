let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 10;

const guessInput = document.getElementById('guessInput');
const submitGuessButton = document.getElementById('submitGuess');
const messageDisplay = document.querySelector('.message');
const guessesLeftDisplay = document.querySelector('.guesses-left');
const resetButton = document.getElementById('resetGame');

guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;

submitGuessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    guessesLeft--;
    guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;

    if (userGuess === randomNumber) {
        messageDisplay.textContent = `Congratulations! You guessed the number ${randomNumber}!`;
        endGame(true);
    } else if (guessesLeft === 0) {
        messageDisplay.textContent = `Game Over! The number was ${randomNumber}.`;
        endGame(false);
    } else if (userGuess < randomNumber) {
        messageDisplay.textContent = 'Too low! Try a higher number.';
    } else {
        messageDisplay.textContent = 'Too high! Try a lower number.';
    }

    guessInput.value = '';
}

function endGame(win) {
    guessInput.disabled = true;
    submitGuessButton.disabled = true;
    resetButton.style.display = 'block';
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessesLeft = 10;
    guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;
    messageDisplay.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    submitGuessButton.disabled = false;
    resetButton.style.display = 'none';
}