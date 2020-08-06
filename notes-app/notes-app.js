let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    console.log(id)
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    // if we add location.assign we don't need to renderNotes here
    // renderNotes(notes, filters)
    location.assign(`/edit.html#${id}`)
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

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// Unix Epoch - January 1st 1970 00:00:00 represemts 0 /1s === 1000

// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// //momentjs.com/docs...format
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(nowTimestamp)
// console.log(moment(nowTimestamp).toString())

const myBDay = moment()
// myBDay.set({'year': 1989, 'month': 10, 'date': 18})
myBDay.year(1989).month(10).date(18)
console.log(myBDay.format('MMM D, YYYY'))