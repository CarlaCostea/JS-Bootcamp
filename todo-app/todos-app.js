let todos = []

const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

const filters = {
    searchText: '',
    hideCompleted: false
}

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

    document.querySelector('#todos').innerHTML= ''
    
    const remainingTodo = document.createElement('h2')
    remainingTodo.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(remainingTodo)
    
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.title
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)``
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        title: e.target.elements.text.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.text.value =''
})

document.querySelector("#check-todos").addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})