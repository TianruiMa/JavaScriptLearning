
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

const body = document.querySelector('body');
const filteredNotesDiv = document.querySelector('#filtered-notes');

const filters = {
    searchText: ''
};

// localStorage.setItem('location','Philadelphia');
// console.log(localStorage.getItem('location'));
// localStorage.removeItem('location');
// localStorage.clear();

// const user = {
//     name: 'Tianrui',
//     age: 26
// };
//
// const userJSON = JSON.stringify(user);
// localStorage.setItem('user',userJSON);
// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(user);

const renderNotes = function (notes, filters){

    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    });

    filteredNotesDiv.innerHTML = '';

    filteredNotes.forEach(function (filterNote) {
        const noteTitle = document.createElement('p');
        noteTitle.textContent = filterNote.title;
        filteredNotesDiv.appendChild(noteTitle);
    })
};

renderNotes(notes,filters);

// addEventListener (GestureName, function)
document.querySelector('#create-note').addEventListener('click',function (e) {
    e.target.textContent = 'New Note Created'
});

document.querySelector('#search-text').addEventListener('input',function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes,filters)
});

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
});



// -- Single --
// p
// #replace
// .item

// -- Multiple --
// p#order
// button.inventory
// h1#title.application
// h2.application#title