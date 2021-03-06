'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }

    // return todosJSON !== null ? JSON.parse(todosJSON) : []
    // if (todosJSON !== null) {
    //     return JSON.parse(todosJSON)
    // } else {
    //     return []
    // }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Get the DOM elements for an individual todo
const generateToDoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoCheckBox = document.createElement('input')
    const todoText = document.createElement('span')
    const todoRemoveButton = document.createElement('button')

    // Setup todo checkbox
    todoCheckBox.setAttribute('type', 'checkbox')
    todoCheckBox.checked = todo.completed
    // we want to put the checkbox and the todoEl in din container 
    containerEl.appendChild(todoCheckBox)
    todoCheckBox.addEventListener('change', () => {
        checkToDo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })


    // Setup todo text
    todoText.textContent = todo.title
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    todoRemoveButton.textContent = 'Remove'
    todoRemoveButton.classList.add('button', 'button--text')
    todoEl.appendChild(todoRemoveButton)
    todoRemoveButton.addEventListener('click', () => {
        removeToDo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

const getIndex = (id) => {
    todos.findIndex((todo) => todo.id == id)
}

const checkToDo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed;
    }
}

// Remove todo by id
const removeToDo = (id) => {
    const todoIndex = getIndex(id)

    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1)
    }
}

// Get the DOM elements for remaining todos
const generateRemainingDOM = (incompleteTodos) => {
    const remainingTodo = document.createElement('h2')
    remainingTodo.classList.add('list-title')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    remainingTodo.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    // if (incompleteTodos.length !== 1)
    // {
    //     remainingTodo.textContent = `You have ${incompleteTodos.length} todos left`
    // } else {
    //     remainingTodo.textContent = `You have ${incompleteTodos.length} todo left`
    // }

    return remainingTodo
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const textMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideMatch = !filters.hideCompleted || !todo.completed
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

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''

    todoEl.appendChild(generateRemainingDOM(incompleteTodos))

    if (filteredTodos.length === 0) {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'Chill out, no todos left'
        todoEl.appendChild(messageEl)
        return
    }

    filteredTodos.forEach((todo) => {
        const p = generateToDoDOM(todo)
        todoEl.appendChild(p)
    })
}