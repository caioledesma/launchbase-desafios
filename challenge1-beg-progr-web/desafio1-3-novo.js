// nova tentativa 

const list = [
    {
        name: "Caio",
        revenue: [120, 150, 40],
        expenses: [200, 100, 10]
    },
    {
        name: "Thiago",
        revenue: [100, 50, 200, 300],
        expenses: [50, 70, 25]
    },
    {
        name: "Hugo",
        revenue: [100, 10, 30],
        expenses: [450, 200, 100, 10, 27.42]
    }
];

//Crie um programa que calcula a sum de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

// Percorra o array, vou precisar do for
// pra cada usuário chama a função calculaSaldo(), recebe de parametro as receitas e despesas

function calculateBalance (revenue, expenses) {
    // tem que usar a função abaixo
    let totalRevenues = sumNumbers(revenue);
    let totalExpenses = sumNumbers(expenses);
    // tem que retornar o saldo, ou seja, receitas - despesas
    let balance = totalRevenues - totalExpenses
    // console.log(saldo)
    return balance
}

// criar uma segunda função q recebe de parametro um array 
// use essa função para sumr e jogar a informação para dentro da calculaSaldo()

function sumNumbers(arrayList){
    //ela tem que sumr os números dentro de um array
    let sum = 0;
    for (let xxx of arrayList){
        sum = sum + xxx
        // console.log(xxx)   
    }
    return sum
} 

// let calcular = sumNumbers(list)

// console.log(calcular, calcular2)

for (i=0; i < list.length ; i++){
    let userName = list[i].name
    let calculate = calculateBalance(list[i].revenue, list[i].expenses);
    
    if(calculate > 0){
        console.log(`${userName} tem um saldo POSITIVO de ${calculate}`)
    } else {
        console.log(`${userName} tem um saldo NEGATIVO de ${calculate}`)
    }
    
} 

//exibir os names e os saldos em tela com um SE

// if ()


