// DOM elements
const body = document.querySelector('body');
const filteredNotesDiv = document.querySelector('#filtered-notes');



// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');
    if (notesJSON !== null){
        return JSON.parse(notesJSON)
    } else {
        return []
    }
};

// Remove a note from the list
const removeNote = function (id) {
    notes = notes.filter(function (item) {
        return item.id !== id;
    });

    // const noteIndex = notes.findIndex(function (note) {
    //     return note.id === id;
    // });
    // if (noteIndex > -1){
    //     notes.splice(noteIndex,1)
    // }
};

// Generate the DOM structure for a note
const GenerateNoteDOM = function (note) {
    const noteDivElement = document.createElement('div');
    const noteDeleteButton = document.createElement('button');
    const noteTitleElement = document.createElement('a');

    noteDeleteButton.textContent = 'x';
    noteDeleteButton.addEventListener('click',function () {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes,filters);
    });
    noteDivElement.appendChild(noteDeleteButton);

    if (note.title.length > 0){
        noteTitleElement.textContent = note.title;
    } else {
        noteTitleElement.textContent = 'Unnamed Note'
    }
    noteTitleElement.setAttribute('href',`/edit.html#${note.id}`);
    // noteTitleElement.addEventListener('click',function () {
    //     location.assign('/edit.html')
    // });
    noteDivElement.appendChild(noteTitleElement);

    return noteDivElement;
};

// Render application notes
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

// Save the notes to localStorage
const saveNotes = function (notes){
    localStorage.setItem('notes', JSON.stringify(notes));
};
