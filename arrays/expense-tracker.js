const account = {
    name: 'Carla Costea',
    income: [],
    expenses: [],
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSunmary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        
        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount
        })

        balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${balance}. $${totalExpenses} expenses and $${totalIncome} income.`
    }
}

account.addExpense('Rent', 300)
account.addExpense('Food', 300)
account.addIncome('Salary', 1000)
account.addIncome('Bonus', 500)
console.log(account.getAccountSunmary())