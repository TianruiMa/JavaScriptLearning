
let notes = getSaveNotes();

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


    filteredNotes.forEach(function (note) {
        const noteElement = GenerateNoteDOM(note);
        filteredNotesDiv.appendChild(noteElement);
    })
};

renderNotes(notes,filters);

// addEventListener (GestureName, function)
document.querySelector('#create-note').addEventListener('click',function (e) {
    notes.push({
        title: '',
        body: ''
    });

    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes,filters);
});

document.querySelector('#search-text').addEventListener('input',function (e) {
    filters.searchText = e.target.value;
    console.log(filters);
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