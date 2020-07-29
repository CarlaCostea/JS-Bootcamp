// function - input (argument), code, output (return value)

let greetUser  = function () {
    console.log('Hello')
}

greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

console.log(square(10));
let value = square(3);
console.log(value);

// Challenge 8 

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8000;
    return celsius;
}

let conversion = convertFahrenheitToCelsius(68);
console.log(conversion)