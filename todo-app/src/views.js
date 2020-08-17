import { getTodos, checkToDo, removeTodo } from './todos'
import { getFilters } from './filters'

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const filters = getFilters()
    const filteredTodos = getTodos().filter((todo) => {
        const textMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideMatch = !filters.hideCompleted || !todo.completed
        // debugger
        return textMatch && hideMatch
    })


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

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
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
        renderTodos()
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
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

// Get the DOM elements for remaining todos
const generateRemainingDOM = (incompleteTodos) => {
    const remainingTodo = document.createElement('h2')
    remainingTodo.classList.add('list-title')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    remainingTodo.textContent = `You have ${incompleteTodos.length} todo${plural} left`

    return remainingTodo
}

export { generateToDoDOM, renderTodos, generateRemainingDOM}