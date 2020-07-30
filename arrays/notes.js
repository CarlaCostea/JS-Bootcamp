// DMDN Arrays

const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.pop() // removes item from end and returns the item
// notes.push('Note 4') // add item to the end

// notes.shift() // removes first element and returns is
// notes.unshift('My first note') // add item at the begining

//start, number of items to remove, item to add
//notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new second note'


// callback function, a function passed in a function
notes.forEach(function (item) {
    console.log(item)
})

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}

console.log(notes.length)
console.log(notes[0])

