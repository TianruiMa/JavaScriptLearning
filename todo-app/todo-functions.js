// DOM elements
const htmlBody = document.querySelector('body');
const searchToDoDiv = document.querySelector('#search-todo-div');


// Fetch existing ToDos rom localStorage
const getSavedToDos = function () {
    const ToDosJSON = localStorage.getItem('todos');
    if (ToDosJSON !== null){
        return JSON.parse(ToDosJSON);
    } else {
        return []
    }
};

// Save ToDos to localStorage
const saveToDos = function (ToDos) {
    localStorage.setItem('todos', JSON.stringify(ToDos));
};

// Render application ToDos based on filter
const renderToDos = function (todos, filters) {
    const filteredToDos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompleteMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompleteMatch;
    });

    searchToDoDiv.innerHTML = '';

    const summaryElement = generateDOMSummary(filteredToDos);
    searchToDoDiv.appendChild(summaryElement);

    filteredToDos.forEach(function (todo) {
        const todoElement = generateToDoOM(todo);
        searchToDoDiv.appendChild(todoElement)
    });
};

// Remove a To/Do from the list
const removeToDo = function (id) {
    ToDos = ToDos.filter(function (item) {
        return item.id !== id;
    })
};

// Toggle the completed value fot a given To/Do
const toggleToDo = function(id){
    const todo = ToDos.find(function (item) {
        return item.id === id;
    });
    
    if (todo !== undefined) todo.completed = !todo.completed;
};

// Get the DOM elements for an individual ToDo
const generateToDoOM = function (todo) {
    const todoElement = document.createElement('div');
    const todoCheckBox = document.createElement('input');
    const todoTextElement = document.createElement('span');
    const todoDeleteButton = document.createElement('button');

    todoCheckBox.setAttribute('type','checkbox');
    todoCheckBox.checked = todo.completed;
    todoCheckBox.addEventListener('change', function () {
        toggleToDo(todo.id);
        saveToDos(ToDos);
        renderToDos(ToDos,filters);
    });
    todoElement.appendChild(todoCheckBox);

    todoTextElement.textContent = todo.text;
    todoElement.appendChild(todoTextElement);

    todoDeleteButton.textContent = 'Delete';
    todoElement.appendChild(todoDeleteButton);
    todoDeleteButton.addEventListener('click',function () {
        removeToDo(todo.id);
        saveToDos(ToDos);
        renderToDos(ToDos,filters);
    });
    return todoElement
};

// Get the DOM elements for list summary
const generateDOMSummary = function (todos) {
    const incompleteFilteredToDos = todos.filter(function (todo) {
        return !todo.completed;
    });
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteFilteredToDos.length} ToDos left`;
    return summary;
};