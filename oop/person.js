// Prototypal Inheritance

class PersonClass {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

const myPerson = new PersonClass('Carla', 'Costea', 30, ['code'])
console.log(myPerson.getBio())

const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}`
    })
    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Carla', 'Costea', 30, ['Teaching', 'Swiming'])
me.setName('Carla Costea')

const you = new Person('Cristina', 'Costea', 13, [])
console.log(me.getBio())