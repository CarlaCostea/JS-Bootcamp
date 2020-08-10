let statusEl = document.querySelector('#status')
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('wife', 3)
// game1.makeGuess('w')
// game1.makeGuess('t')
// game1.makeGuess('z')

statusEl.textContent = game1.status
puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getMessage()

// const game2 = new Hangman('complicated', 5)
// game2.makeGuess('c')
// console.log(game2.getPuzzle())
// console.log(game2.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.getStatus(game1)
    statusEl.textContent = game1.status
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getMessage()
})