const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44)) // Output 33

// const add = () => {
//     return arguments[0] + arguments[1]
// }

console.log(add(11, 22, 33, 44)) // We get node specific output (node course). our local function do not bind arguments

// arrow functions don't bind this.value
const car = {
    color: 'Red',
    // getSummary: function () {
    //     return `The car is ${this.color}`
    // } ===
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary()) // Output: The car is red

// // arrow functions don't bind this.value
// const car = {
//     color: 'Red',
//     getSummary: () => {
//         return `The car is ${this.color}`
//     }
// }

// console.log(car.getSummary()) // Output: car is undefined