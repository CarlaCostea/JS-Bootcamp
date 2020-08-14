// in terminat: babel input.js -o output.js then from boilerplate folder: npm init
// local install npm install babel-preset-env

// babel input.js --out-file output.js --presets env
// babel src/index.js --out-file public/scripts/bundle.js --presets env

// npm run build

const name = 'Jen'
console.log(name)

class Hangman {
    myMethod() {
        return 'Testing'
    }
}

const hangman = new Hangman()
console.log(hangman.myMethod())