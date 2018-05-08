
let notes = getSaveNotes();


const filters = {
    searchText: ''
};

renderNotes(notes,filters);

// addEventListener (GestureName, function)
document.querySelector('#create-note').addEventListener('click',function (e) {
    notes.push({id: uuidv4(), title: '', body: ''});
    saveNotes(notes);
    renderNotes(notes,filters);
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