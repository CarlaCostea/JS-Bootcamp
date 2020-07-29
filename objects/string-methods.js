// Documentation string - JS MDN
let name = '  Carla Costea   '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim removes space from the beginning and the end of a string
console.log(name.trim())

// Challenge 14

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('gfhtfjgf'))
console.log(isValidPassword('abrtutjdr46'))
console.log(isValidPassword('asrsyrhdijpassword'))