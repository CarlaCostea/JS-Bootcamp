var firstName = 'Carla'

firstName = 'Other'

//var permits us to redeclare a variable
var firstName = ''

// var is function scope not block scope. if we do not create a new function we don't have a new scope
if (true) {
    var firstName = 'NOT GOOD!'
}

console.log(firstName) // 'NOT GOOD'

const setName = function () {
    var firstName = 'Jane'
}

setName()
console.log(firstName) // first name undefined

console.log(age)
var age // undefined

console.log(age)
let age // Error: age is not defined