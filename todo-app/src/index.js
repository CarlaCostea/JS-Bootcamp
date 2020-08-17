// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'
import { renderTodos } from './views'

renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = e.target.elements.text.value.trim()
    if (input === '' || e.target.elements.text.value === null) {
        return
    }

    createTodo(input)
    renderTodos()
    e.target.elements.text.value = ''
})

document.querySelector("#check-todos").addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})
