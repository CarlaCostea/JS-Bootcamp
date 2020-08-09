// Primitive value : string, number, boolean, null, undefined

// Object: myObject (product) --> Object.prototype --> null
const product = {
    name: 'Influence'
}

// hasOwnProperty
console.log(product.hasOwnProperty('hasOwnProperty'))
console.log(product)

Object.prototype.someNewMethod = () => 'This is the new function'
console.log(product.someNewMethod())

// Array: myArray --> Array.prototype --> Object.prototype --> null

const team = ['Luke', 'Mad']
console.log(team.hasOwnProperty('length')) //true
console.log(team.hasOwnProperty('filter')) //false - filter comes from array.prototype

// Function myFunc --> Function.prototype --> Object.prototype --> null
const getScore = () => 1
console.log(getScore)

// string, number and boolean have an object wraper - when we try to acces a property, the string is converted to an object
const product = 'computer'

// String: myString --> String.prototype --> Object.prototype --> null
const otherProduct = new String('mac')
console.log(otherProduct)

// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null