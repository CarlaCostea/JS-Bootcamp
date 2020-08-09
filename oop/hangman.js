const Hangman = function(word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['c']
}

Hangman.prototype.getPuzzle = function () {
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

const game1 = new Hangman('wife', 3)
const game2 = new Hangman('complicated', 5)

console.log(game1.getPuzzle())
console.log(game2.getPuzzle())