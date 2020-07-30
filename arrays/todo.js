// Challenge

// const todos = ['learn', 'write code', 'drink coffee', 'create', 'work on a project']

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

console.log(`You have ${todos.length} todos`)

// todos.splice(2, 0, 'where to put this')

// for (let i = 0; i < todos.length; i++) {
//     console.log(`ToDo ${i + 1}: ${todos[i]}`)
// }

// todos.forEach( function(item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

console.log(todos)

const deleteTodo = function(todos, todoToDelete) {
    const index = todos.findIndex( function(todo) {
        return todo.title.toLowerCase() === todoToDelete.toLowerCase()
    })
    if (index != -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'drink coffee')
console.log(todos)

// todos.splice(2, 1)
// todos.push('drink coffee')
// todos.shift()

// console.log(todos)