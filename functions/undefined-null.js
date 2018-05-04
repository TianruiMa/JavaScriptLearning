let name

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}




let square = function (num) {
    let result = num * num
    console.log(result)
    return result
}

let result = square()
console.log(result)




// null as assigned value
let age = 26
age = null
console.log(age)
