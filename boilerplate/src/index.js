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

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')