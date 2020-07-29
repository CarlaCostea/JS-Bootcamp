let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

// let getSummary = function (book) {
//     console.log(`${book.title} by ${book.author}`)
// }
// getSummary(myBook)
// getSummary(otherBook)

//return an object
let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge 12
// Create funtion - take fahrenheit in - return object with all three

let convertFahrenheit = function (fahrenheit) {
    return {
        fahreneit: fahrenheit,
        celsius: (fahrenheit - 32) / 1.8000,
        kelvin: (fahrenheit - 32) / 1.8000 + 273.15
    }
}

let temperature = convertFahrenheit(68)
console.log(temperature)
