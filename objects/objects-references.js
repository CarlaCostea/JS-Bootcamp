let myAccount = {
    name: 'Carla',
    expenses: 0,
    income: 0
}
 
let otherAccount = myAccount
otherAccount.incom = 1000 // this changes myAccount
otherAccount = {} //thist breaks the bind

// if we pass an object to a function we can manipulate its properties originally past in
let addExpense = function (account, amount) {
    //if  we asign a new value to the object this bind will break- account = {}
    account.expenses += amount
    //console.log(account)
}

addExpense(myAccount, 2.50)
//console.log(myAccount)

//Challenge 13

let addIncome = function (account, amount) {
    account.income += amount
    //console.log(account)
}

let resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    return `Balance account for ${account.name} is ${balance}. Income is $${account.income}. Expenses are $${account.expenses}`
}

addIncome(myAccount, 10)
addExpense(myAccount, 3)
addExpense(myAccount, 1)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))