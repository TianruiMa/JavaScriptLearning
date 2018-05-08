const account = {
    name: 'Andrew Mead',
    expenses: [],
    incomes: [],

    addExpense: function (description, amount) {
        const newExpense = {description: description, amount: amount}
        this.expenses.push(newExpense)
    },

    addIncome: function (description, amount) {
        const newIncome = {description: description, amount: amount}
        this.incomes.push(newIncome)
    },

    getAccountSummary: function () {
        let totalExpense = 0
        this.expenses.forEach(function (expense) {
            totalExpense += expense.amount
        })

        let totalIncome = 0
        this.incomes.forEach(function (income) {
            totalIncome += income.amount
        })
        return `${this.name} has a balance of $${totalIncome-totalExpense}. $${totalIncome} in income. $${totalExpense} in expenses.`
    }
}




account.addExpense('Rent', 950)
account.addExpense('Coffee',2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())