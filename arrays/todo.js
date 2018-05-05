
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value
const deleteTodo = function(todos, targetText){
    const targetIndex = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === targetText.toLowerCase()
    })

    if (targetIndex > -1) {
        todos.splice(targetIndex,1)
    }
}


const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    return todos.sort(function (a, b) {
        const completeA = a.completed
        const completeB = b.completed
        if (completeA === completeB) return 0
        else if (completeA === false) return 1
        else return 0
    })
}

console.log(sortTodos(todos))