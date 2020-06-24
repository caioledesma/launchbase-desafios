const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

// criar uma função createTransaction
function createTransaction(transaction){
    user.transactions.push(transaction.value)
    if(transaction.type == 'credit'){
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }return user.balance
}

const transaction = {
    type: 'credit',
    value: 500.5
  }

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.transactions)
console.log(user.balance)


function getHigherTransactionByType(xxx){
    return Math.max.apply(Math, xxx)   
}
function getAverageTransactionValue(yyy){
    
    return user.balance =+ transaction.value / (user.transactions.length)
}

console.log(getAverageTransactionValue(user.transactions))
console.log(getHigherTransactionByType(user.transactions))


// createTransaction(transaction.type, transaction.value)
// createTransaction('credit', 120)
// createTransaction('debit', 100)
// createTransaction('credit', 50)



// function createTransaction(type, value){

//     if(type == 'credit'){
//     let credit = user.transactions.push(value)
//     return credit

// } else if(type == 'debit') {
    
//     let debit = user.transactions.push(-value)
//     return debit
// }  
// }

// somando o balance
// function sumBalance(userBalance){
//     let sum = 0

//     for (let number of userBalance){
//         sum = number + sum 
//     } 
//     return user.balance = user.balance + sum
// } 



