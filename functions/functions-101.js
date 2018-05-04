let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()



let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)



let convertFahrenheitToCelsius = function (fahrenheit) {
    let resultCelsius = (fahrenheit - 32) * 5 / 9
    return resultCelsius
}

console.log(convertFahrenheitToCelsius(50))