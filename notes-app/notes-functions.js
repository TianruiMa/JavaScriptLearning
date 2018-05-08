
// Read existing notes from localStorage
const getSaveNotes = function () {
    const notesJSON = localStorage.getItem('notes');
    if (notesJSON !== null){
        return JSON.parse(notesJSON)
    } else {
        return []
    }
};

// Generate the DOM structure for a note
const GenerateNoteDOM = function (note) {
    const noteElement = document.createElement('p');
    if (note.title.length > 0){
        noteElement.textContent = note.title;
    } else {
        noteElement.textContent = 'Unnamed Note'
    }
    return noteElement;
};