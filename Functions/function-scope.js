// Global scope ( convertFahrenheitToCelsius, firstConversion, secondConversion)
    // Local scope ( fahrenheit, celsius)
        // Local scope
        
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8000;
    return celsius;
}

let firstConversion = convertFahrenheitToCelsius(68);
let secondConversion = convertFahrenheitToCelsius(32);

console.log(firstConversion)
console.log(secondConversion)