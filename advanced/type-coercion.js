// Type coercion - a string, a number, a boolean
// check pdf for more details

console.log('5' + 5) // string
console.log( 5 + '5' + 5) // string
console.log( 5 + '5') // string
console.log('5' + 5) // number

console.log('5' == 5) //true

console.log('5' === 5) //false

let type = typeof 123
console.log(type)

const value = false + 12
type = typeof value

console.log(type) // numebr
console.log(value) // 12
console.log(value + true) // 13