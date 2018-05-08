
let ToDos = [];

const filters = {
    searchText:'',
    hideCompleted:false
};

const htmlBody = document.querySelector('body');
const searchToDoDiv = document.querySelector('#search-todo-div');


const ToDosJSON = localStorage.getItem('todos');
if (ToDosJSON !== null){
    ToDos = JSON.parse(ToDosJSON);
}

const renderToDos = function(todos, filters){

    const filteredToDos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompleteMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompleteMatch;
    });

    const incompleteFilteredToDos = filteredToDos.filter(function (todo) {
        return !todo.completed;
    });

    searchToDoDiv.innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteFilteredToDos.length} ToDos left`;
    searchToDoDiv.appendChild(summary);

    filteredToDos.forEach(function (todo) {
        const filteredTodo = document.createElement('p');
        filteredTodo.textContent = todo.text;
        searchToDoDiv.appendChild(filteredTodo)
    });
};

renderToDos(ToDos,filters);

document.querySelector('#search-todo').addEventListener('input',function (e) {
    filters.searchText = e.target.value;
    renderToDos(ToDos,filters)
});

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    const newToDo = {
        text: e.target.elements.newToDoText.value,
        completed :false
    };
    ToDos.push(newToDo);
    localStorage.setItem('todos', JSON.stringify(ToDos));
    renderToDos(ToDos,filters);
    e.target.elements.newToDoText.value = ''
});

document.querySelector('#hide-completed').addEventListener('change',function (e) {
    filters.hideCompleted = e.target.checked;
    renderToDos(ToDos,filters);
});