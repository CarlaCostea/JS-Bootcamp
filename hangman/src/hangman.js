class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
        let puzzle = ''

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
    get message() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        }

        if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        }

        return 'Great work! You guessed the word'
    }
    getStatus(currentGame) {
        if (this.remainingGuesses > 0 && !currentGame.puzzle.includes('*')) {
            this.status = 'finished'
        }

        if (this.remainingGuesses < 1) {
            this.status = 'failed'
        }
    }
}

export { Hangman as default }