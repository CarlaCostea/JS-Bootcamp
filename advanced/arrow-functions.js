const square = (num) => num * num


console.log(square(5))

// shorthand syntax
const squareLong = (num) => {
    return num * num
}

const people = [{
    name: 'Carla',
    age: 30
}, {
    name: 'Cristina',
    age: 13
}, {
    name: 'Vladut',
    age: 29
}]

// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

const age13 = people.find((person) => person.age == 13)

console.log(age13.name)