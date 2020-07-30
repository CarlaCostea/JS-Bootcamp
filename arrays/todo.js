// Challenge

const todos = ['learn', 'write code', 'drink coffee', 'create', 'work on a project']

console.log(`You have ${todos.length} todos`)

// todos.splice(2, 0, 'where to put this')

// for (let i = 0; i < todos.length; i++) {
//     console.log(`ToDo ${i + 1}: ${todos[i]}`)
// }

todos.forEach( function(item, index) {
    console.log(`${index + 1}. ${item}`)
})

todos.splice(2, 1)
todos.push('drink coffee')
todos.shift()

console.log(todos)