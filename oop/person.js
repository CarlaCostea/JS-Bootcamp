// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
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

class Employee extends Person{
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        let bio = `${this.firstName} is a ${this.position}`
        return bio
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        if (this.grade < 70) {
            return`${this.firstName} is failing the class with grade ${this.grade}`
        }
        return `${this.firstName} is passing the class with grade ${this.grade}`
    }
    updateGrade(amount) {
        this.grade += amount
    }
}

// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function () {
//     let bio = `${this.firstName} is ${this.age}`

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}`
//     })
//     return bio
// }

// Person.prototype.setName = function (fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }

const me = new Employee('Carla', 'Costea', 30, 'Intern', ['code'])
console.log(me.getBio())
me.setName('Carla Costea')

const you = new Person('Cristina', 'Costea', 13, ['listening music'])
console.log(you.getBio())

const student1 = new Student('John', 'Doe', '20', ['math'], 50)
console.log(student1)
console.log(student1.getBio())
student1.updateGrade(25)
console.log(student1.getBio())