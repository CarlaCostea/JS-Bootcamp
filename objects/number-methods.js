// Documentation MDN number, math
let num = 103.941

//fix number of decimals
console.log(num.toFixed(2)) //103.94

console.log(Math.round(num)) //104
console.log(Math.floor(num)) //103
console.log(Math.ceil(num))  //104

//math.random() generates a number between 0 and 1(1exclusive)

// if we want to generate a number between 2 numbers we use min and max

// 0 - 9.9999999999
// let min = 10
// let max = 20 
// let random = Math.random() * (max - min )
// let random = Math.floor(Math.random() * (max - min )) + 10  => 10 - 20
let min = 0
let max = 10
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum) // 0 - 10

// Challenge 15
// 1 - 5 

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}

console.log(makeGuess(3))