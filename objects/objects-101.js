let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge 11

let person = {
    name: 'Carla',
    age: '30',
    location: 'Cluj-Napoca'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age++;

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
