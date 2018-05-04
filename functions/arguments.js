
// default arguments
let add = function (a, b=2) {
    return a + b
}

let result = add(5)
console.log(result)





// Challenge area
let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tip = getTip(100)
console.log(`Hey, you should pay tip for ${tip} dollars`)