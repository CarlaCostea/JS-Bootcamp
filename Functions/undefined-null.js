//undefined is the absence of a value

// Undefined for variable

let name

//name = 'Carla'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}


// Undefined for function arguments

let square = function (num) {
    console.log(num) 
}

square(); // undefined

let result = square()

//undefined as function return default value
console.log(result) // undefined

// clear variable - to know that it was explicity cleared use null
let age = 27;
//age = undefined;
age = null;
console.log(age); // undefined