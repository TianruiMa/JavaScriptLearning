let myAccount = {
    name: 'Tianrui Ma',
    expenses: 0,
    income: 0
}

// a reference
let otherAccount = myAccount

let addExpense = function (account, amount) {
    account.expenses += amount
}

let addIncome = function (account, amount) {
    account.income += amount
}

let resetAccount = function (account, amount) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    return `Account for ${account.name} has ${account.income-account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}

addExpense(myAccount,2.50)
console.log(myAccount)
console.log(otherAccount)

resetAccount(myAccount)
addIncome(myAccount,1000)
addExpense(myAccount,551)
console.log(getAccountSummary(myAccount))