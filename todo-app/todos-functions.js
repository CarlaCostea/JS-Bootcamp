// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Get the DOM elements for an individual todo
const generateToDoDOM = function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.title
    return p
}

// Get the DOM elements for remaining todos
const generateRemainingDOM = function (incompleteTodos) {
    const remainingTodo = document.createElement('h2')
    remainingTodo.textContent = `You have ${incompleteTodos.length} todos left`
    return remainingTodo
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        const textMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        hideMatch = !filters.hideCompleted || !todo.completed
        return textMatch && hideMatch
    })

    // filteredTodos = filteredTodos.filter(function (todo) {
    //     return !filters.hideCompleted || !todo.completed
    //     // if (filters.hideCompleted) {
    //     //     return !todo.completed
    //     // } else {
    //     //     return true
    //     // }
    // })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateRemainingDOM(incompleteTodos))
    
    filteredTodos.forEach(function (todo) {
        const p = generateToDoDOM(todo)
        document.querySelector('#todos').appendChild(p)
    })
}