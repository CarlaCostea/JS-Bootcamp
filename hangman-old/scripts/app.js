// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do (generate a new word or frase for our game)
// Response - What was actually done (contain word or frase)

let statusEl = document.querySelector('#status')
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game
// game1.makeGuess('w')
// game1.makeGuess('t')
// game1.makeGuess('z')

// puzzleEl.textContent = game.puzzle
// guessesEl.textContent = game.message
// statusEl.textContent = game.status

// const game2 = new Hangman('complicated', 5)
// game2.makeGuess('c')
// console.log(game2.getPuzzle())
// console.log(game2.remainingGuesses)

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

// // used with fetch request to return string
// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// // used with fetch request
// getCountry('RO').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// const token = '062dd84f537e97'
// getLocation(token).then((data) => {
//     return getCountry(data.country)
// }).then((data) => {
//     console.log(data.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

// // used with fetch request
// getPuzzle('2').then((data) => {
//     console.log(data.puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// // used with promise request
// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

// // used with promise request
// getCountry('RO').then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

// getCountry('RO',(error, country) => {
//     if (error) {
//         console.log(error)
//         return
//     }
    
//     console.log(country.name)
// })


// // we usualy do not use this
// const puzzle = getPuzzleSync()
// console.log(puzzle)

// Challenge

    // Making an HTTP request

// const countryCode = 'RO'
// const request = new XMLHttpRequest()

    // https://httpstatuses.com/

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log('An error occurred')
//     }
// })

// request.open('GET', 'https://restcountries.eu/rest/v2/all')
// request.send()

// The Fetch API
// fetch returns a promise
// fetch('http://puzzle.mead.io/puzzle', {}). then((response) => {
//     if (response.status !== 200) {
//         throw new Error('Unable to fetch the puzzle')
//     }
//     return response.json()
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch(() => {
//     console.log(error)
// })