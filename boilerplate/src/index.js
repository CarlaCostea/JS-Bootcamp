// const calculateAverage = (numOne, numTwo) => {
//     return (numOne + numTwo) / 2
// }

// console.log(calculateAverage(0,100))

const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('grade', 0, 100, 56, 80))

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Libery',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}
printTeam(team.name, team.coach, ...team.players)
// printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')

let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
let citiesCopy = [...cities, 'Santiago']
// citiesCopy.push('Santiago')
console.log(citiesCopy)

// to use spread operator with objects we need to install babel-plugin-transform-object-rest-spread@6.26.0
let house = {
    bedrooms: 2,
    bathrooms: 1,
    yearBuilt: 1999
}

// these are 2 independent projects
let newHouse = {
    besement: true,
    ...house,
    bedrooms: 3
}

console.log(house)
console.log(newHouse)

// Challenge

let person = {
    name: 'Carla',
    age: 30
}

let location = {
    city: 'Cluj-Napoca',
    country: 'Romania'
}

let aboutMe = {
    ...person,
    ...location,
    kids: 1
}

console.log(aboutMe)