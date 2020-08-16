// in terminat: babel input.js -o output.js then from boilerplate folder: npm init
// local install npm install babel-preset-env

// babel input.js --out-file output.js --presets env
// babel src/index.js --out-file public/scripts/bundle.js --presets env

// npm run build

//import './utilities.js'

import otherSquare, { add, name } from './utilities'
import scream from './scream'

console.log('name')
console.log(add(32, 1))
console.log(scream("hello"))
console.log(otherSquare(2))