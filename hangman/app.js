// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do (generate a new word or frase for our game)
// Response - What was actually done (contain word or frase)

let statusEl = document.querySelector('#status')
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('black cat', 4)
// game1.makeGuess('w')
// game1.makeGuess('t')
// game1.makeGuess('z')

statusEl.textContent = game1.status
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.message

// const game2 = new Hangman('complicated', 5)
// game2.makeGuess('c')
// console.log(game2.getPuzzle())
// console.log(game2.remainingGuesses)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.getStatus(game1)
    statusEl.textContent = game1.status
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.message
})

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error :${error}`)
        return
    } 
    console.log(puzzle)
})

getCountry('RO',(error, country) => {
    if (error) {
        console.log(error)
        return
    }
    
    console.log(country.name)
})


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

