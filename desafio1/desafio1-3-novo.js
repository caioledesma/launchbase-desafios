// nova tentativa 

const lista = [
    {
        nome: "Caio",
        receitas: [120, 150, 50.5],
        despesas: [200, 100, 10]
    },
    {
        nome: "Thiago",
        receitas: [100, 50, 200, 300],
        despesas: [50, 70, 25]
    },
    {
        nome: "Hugo",
        receitas: [100, 10, 30],
        despesas: [450, 200, 100, 10, 27.42]
    }
];

//Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

// Percorra o array, vou precisar do for
// pra cada usuário chama a função calculaSaldo(), recebe de parametro as receitas e despesas

function calculaSaldo (receitas, despesas) {
    // tem que usar a função abaixo
    let totalReceita = somaNumeros(receitas);
    let totalDespesas = somaNumeros(despesas);
    // tem que retornar o saldo, ou seja, receitas - despesas
    let saldo = totalReceita - totalDespesas
    // console.log(saldo)
    return saldo
}

// criar uma segunda função q recebe de parametro um array 
// use essa função para somar e jogar a informação para dentro da calculaSaldo()

function somaNumeros(arrayLista){
    //ela tem que somar os números dentro de um array
    let soma = 0;
    for (let xxx of arrayLista){
        soma = soma + xxx
        // console.log(xxx)   
    }
    return soma
} 

// let calcular = somaNumeros(lista)

// console.log(calcular, calcular2)

for (i=0; i < lista.length ; i++){
    let userName = lista[i].nome
    let calcular2 = calculaSaldo(lista[i].receitas, lista[i].despesas);
    
    if(calcular2 > 0){
        console.log(`${userName} tem um saldo POSITIVO de ${calcular2}`)
    } else {
        console.log(`${userName} tem um saldo NEGATIVO de ${calcular2}`)
    }
    
} 

//exibir os nomes e os saldos em tela com um SE

// if ()


