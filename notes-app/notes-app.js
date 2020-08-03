const notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
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

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     //prevent the default behavior
//     e.preventDefault()
//     //acces all the elements we set up
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })