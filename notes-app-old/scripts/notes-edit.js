'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const dateElement = document.querySelector('#last-edited')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

// if (note === undefined) {
//     location.assign('/index.html')
// }

if (!note) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updateAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updateAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updateAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updateAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updateAt)
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})


// update storage in all windows
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)

        note = notes.find((note) => note.id === noteId)

        if (!note) {
            location.assign('/index.html')
        }

        // if (note === undefined) {
        //     location.assign('/index.html')
        // }

        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updateAt)
    }
})