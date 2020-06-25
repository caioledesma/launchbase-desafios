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

// Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit, percorre as transações do usuário e retorna o objeto da transação de maior valor com aquele tipo:
// getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }


// function getHigherTransactionByType(xxx){ 
//     let higher = Math.max.apply(Math, xxx)
//     if(higher == user.transactions.value){
//         console.log(`o maior é ${user.transactions[higher.value]}`)    
//         return higher
//     }    
    
// } 



console.log(Max.math.apply(Math, user.transactions))
// console.log(getHigherTransactionByType(user.transactions))

// console.log(user.transactions.value)

// primeiro eu descubro ql é maior, depois pego esse maior e comparo com as transações, quando for igual é o higher transaction, msm coisa pro mínimo 
// if higherTransaction = user.transactions.value 
// return user.transaction


// if (user.transaction.type == "credit"){
//     for (i=0; i > )
//     if(user.transaction[i] > user.transaction[i+1]){
//         return true 
//     }

// }



// function getAverageTransactionValue(yyy){
    
//     return user.balance =+ transaction.value / (user.transactions.length)
// }

// console.log(getAverageTransactionValue(user.transactions))


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



