class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    getPuzzle() {
        let puzzle =''

    this.word.forEach(letter => {
          if (this.guessedLetters.includes(letter) || letter === ' ') {
              puzzle += letter
          } else {
              puzzle += '*'
          }      
    });
    return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)

        if (this.status !== 'playing') {
             return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && !this.word.includes(guess)) {
            this.remainingGuesses--
        }
    }
    getMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        }
    
        if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        }
    
        return 'Great work! You guessed the word'
    }
    getStatus(currentGame) {
        if (this.remainingGuesses > 0 && !currentGame.getPuzzle().includes('*')) {
            this.status = 'finished'
        }
        
        if (this.remainingGuesses < 1) {
            this.status = 'failed'
        }
    }
}


// Hangman.prototype.getStatus = function (currentGame) {
//     // using every
//     // const finished = this.word.every((letter) => this.guessedLetters.includes(letter)

//     // filter unguessed letters
//     // const lettersUnguessed = this.word.filter((letter) => {
//     //     return !this.guessedLetters.includes(letter)
//     // })
//     // const finished = lettersUnguessed.length === 0

//     // chech if all the letter in word are in guessedLetters
//     // let finished = true
//     // this.word.forEach((letter) => {
//     //     if (this.guessedLetters.includes(letter)) {
//     //         //finished = true
//     //     } else {
//     //         finished = false
//     //     }
//     // })
//     if (this.remainingGuesses > 0 && !currentGame.getPuzzle().includes('*')) {
//         this.status = 'finished'
//     }
    
//     if (this.remainingGuesses < 1) {
//         this.status = 'failed'
//     }
// }

