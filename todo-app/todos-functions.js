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
    const todoEl = document.createElement('div')
    const todoCheckBox = document.createElement('input')
    const todoText = document.createElement('span')
    const todoRemoveButton = document.createElement('button')
    
    // Setup todo checkbox
    todoCheckBox.setAttribute('type', 'checkbox')
    todoCheckBox.checked = todo.completed
    todoEl.appendChild(todoCheckBox)
    todoCheckBox.addEventListener('change', function(){
        checkToDo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
  

    // Setup todo text
    todoText.textContent = todo.title
    todoEl.appendChild(todoText)

    // Setup the remove button
    todoRemoveButton.textContent = 'x'
    todoEl.appendChild(todoRemoveButton)
    todoRemoveButton.addEventListener('click', function() {
        removeToDo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoEl
}

const getIndex = function (id) {
    todos.findIndex( function (todo) {
        return todo.id == id
    })
}

const checkToDo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined)
    {
        todo.completed = !todo.completed;
    } 
} 

// Remove todo by id
const removeToDo = function (id) {
    const todoIndex = getIndex(id)

    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1)
    }
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
        // debugger
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