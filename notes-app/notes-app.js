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

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    }) 

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
    console.log(filteredNotes)
}

renderNotes(notes, filters)

// DOM - Document Object Model

// Querry and remove firs occurence
// const p = document.querySelector('p')
// p.remove()

// Querry all and remove
// const ps = document.querySelectorAll('p') //returns a list

// // ps.forEach(function (p) {
// //     p.remove()
// // })

// ps.forEach(function (p) {
//     p.textContent = "changes"
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JS'

// // we have to select the place where we want it and add it to the end 
// document.querySelector('body').appendChild(newParagraph)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('#notes').forEach(function (note) {
        note.remove()
    })
})

document.querySelector("#search-text").addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     //prevent the default behavior
//     e.preventDefault()
//     //acces all the elements we set up
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})