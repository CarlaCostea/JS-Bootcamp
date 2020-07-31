const todos = [{
    title: 'learn',
    completed: true
}, {
    title: 'write code',
    completed: true
}, {
    title: 'drink coffee',
    completed: false
}, {
    title: 'create',
    completed: true
}, {
    title: 'work on a project',
    completed: false
}]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

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

//Listen for new todo creation
// document.querySelector('#add-todo').addEventListener('click', function () {
//     console.log('add')
// })
// const ps = document.querySelectorAll('p')

// ps.forEach( function(p) {
//     if (p.textContent.includes('coffee'))
//     {
//         p.remove()
//     }
// })

// Listen for input new-todo
// document.querySelector('#new-todo').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        title: e.target.elements.text.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value =''
})