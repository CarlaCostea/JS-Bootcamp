// DMDN Arrays

//const notes = ['Note 1', 'Note 2', 'Note 3']

const notes = [ {
    title: 'Note 1',
    body: 'I would like a pizza'
}, {
    title: 'Note 2',
    body: 'Exercise. Eat better'
}, {
    title: 'Note 3',
    body: 'Sleep more'
}, {
    title: 'Note 11',
    body: 'Read a book'
}]

// notes.pop() // removes item from end and returns the item
// notes.push('Note 4') // add item to the end

// notes.shift() // removes first element and returns is
// notes.unshift('My first note') // add item at the begining

//start, number of items to remove, item to add
//notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new second note'


// callback function, a function passed in a function
// notes.forEach(function (item) {
//     console.log(item)
// })

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

// console.log(notes.length)
// console.log(notes[0])

// console.log(notes.indexOf('Note 2'))

// let someObject = {}
// let otherObject = someObject // only in this case two object are equal someObject === otherObject

// console.log(notes.indexOf({})) // -1

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note) {
//             return note.title === noteTitle
//         })
//         return notes[index]
// }

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) { // find returns the item or undefined
            return note.title === noteTitle
        })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, '1'))


const note = findNote(notes, 'Note 3')
console.log(note)


// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Note 2'
// })

// console.log(index)
