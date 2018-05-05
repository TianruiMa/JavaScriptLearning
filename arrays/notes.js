const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a btt better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}




const filterNotes = function (notes, query){
    return notes.filter(function (note) {
        const  isTitleMatch = note.title.toLowerCase().includes(query)
        const  isBodyMatch = note.body.toLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
}


const sortNotes = function (notes) {
    return notes.sort(function (a, b) {
        // if a first -1
        // if a after 1
        // no change 0
        // capital first
        const lowerA = a.title.toLowerCase()
        const lowerB = b.title.toLowerCase()
        if (lowerA < lowerB) return -1
        else if (lowerA > lowerB) return 1
        else 0
    })
}

console.log(sortNotes(notes))


// const index  = notes.findIndex(function (note, index) {
//     return note.title === 'Habbits to work on'
// })
//
// console.log(index)

// console.log({hey:0}==={hey:0})

// let one = {hey:0,hello:1}
// let two = one
// two.hello = 2
// console.log(one===two)

// console.log(notes.length)
// console.log(notes[2])

// var undo = notes.pop()
// notes.push('my new note')
// notes.shift()
// notes.unshift('first')
// console.log(notes)

// notes.splice(1 , 0, 'okokok')
//
// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })
//
// console.log(notes.indexOf('Note 22'))
//
// console.log(notes)
// for (let count = 0; count < 3; count++) {
//     console.log(count+1)
// }