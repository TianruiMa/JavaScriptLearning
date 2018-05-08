
let ToDos = [];

const filters = {
    searchText:'',
    hideCompleted:false
};


ToDos = getSavedToDos();

renderToDos(ToDos,filters);

document.querySelector('#search-todo').addEventListener('input',function (e) {
    filters.searchText = e.target.value;
    renderToDos(ToDos,filters)
});

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    const newToDo = {id: uuidv4(), text: e.target.elements.newToDoText.value, completed :false};
    ToDos.push(newToDo);
    saveToDos(ToDos);
    renderToDos(ToDos,filters);
    e.target.elements.newToDoText.value = ''
});

document.querySelector('#hide-completed').addEventListener('change',function (e) {
    filters.hideCompleted = e.target.checked;
    renderToDos(ToDos,filters);
});