import Hangman from './hangman'
import getPuzzle from './requests'

let statusEl = document.querySelector('#status')
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    game.getStatus(game)
    //statusEl.textContent = game.status
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    // puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.message

    game.puzzle.split('').forEach((char) => {
        const charEl = document.createElement('span')
        charEl.textContent = char
        puzzleEl.appendChild(charEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
