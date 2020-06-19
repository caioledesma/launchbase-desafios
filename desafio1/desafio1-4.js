const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};


let transactionCredit = {
        type: 'credit',
        value: 20
    }

let transactionDebit = {
    type: 'debit',
    value: -50.5
}



let deposito = user.transactions.push({ type: "credit", value: 50 })
let deposito2 = user.transactions.push({ type: "credit", value: 100 })




console.log(user)