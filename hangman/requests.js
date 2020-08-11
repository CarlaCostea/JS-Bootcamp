const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error occurred', undefined)
            console.log('An error occurred')
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}

// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest()
//     // force the code to wait untill the http request completes - the entire browser is locked
//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false)
//     request.send()
//     // this code will run only after the server responds with the data
//     if (!request.readyState === 4 || !request.status === 200) {
//         throw new Error('An error occurred')
//     }
//     const data = JSON.parse(request.responseText)
//     return data.puzzle
// }

const getCountry = (countryCode, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback('Unable to fetch data', undefined )
        }
    })

    request.open('GET', 'https://restcountries.eu/rest/v2/all')
    request.send()
}