// async/await
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status !== 200) {
        throw new Error('An error occurred')
    }
    const data = await response.json()
    return data.puzzle
}

// convert to fetch
const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status !== 200) {
            throw new Error('An error occurred')
        }

        return response.json()
        // to return a string not an object we add then:    
    }).then((data) => {
        return data.puzzle
    })
}

// Convert to fetch challenge
const getCountryOld = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status !== 200) {
            throw new Error('An error occurred')
        }
        return response.json()
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}

// Get location challenge
const getLocationOld = (token) => {
    return fetch(`http://ipinfo.io/json?token=${token}`).then((response) => {
        if (response.status !== 200) {
            throw new Error('An error occurred')
        }

        return response.json()
    })
}

// async await challenge
const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    if (response.status !== 200) {
        throw new Error('An error occurred')
    }
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
}

// async await challenge
const getLocation = async (token) => {
    const response = await fetch(`http://ipinfo.io/json?token=${token}`)
        if (response.status !== 200) {
            throw new Error('An error occurred')
        }

        return response.json()
}

const getCurrentCountry = async () => {
    const location = await getLocation(token)
    // const country = await getCountry(location.country)
    // return country
    return getCountry(location.country)
}

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error occurred')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })

// const getPuzzle = (wordCount, callback) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data.puzzle)
//         } else if (e.target.readyState === 4) {
//             callback('An error occurred', undefined)
//             console.log('An error occurred')
//         }
//     })

//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=${wordCount}')
//     request.send()
// }

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

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('Unable to fetch data')
//         }
//     })

//     request.open('GET', 'https://restcountries.eu/rest/v2/all')
//     request.send()
// })