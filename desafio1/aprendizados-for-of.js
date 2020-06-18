
const usuarios = [
    {
        nome: "Salvio",
        receitas: [10, 10, 10, 10],
        despesas: [10, 10, 10]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    },
		{
        nome: "Rodrigo",
        receitas: [10, 20, 10, 20],
        despesas: [30, 30]
    }
];

//Somar os números de cada Array
function somaNumeros(numeros) {
    let soma = 0
    for (let numero of numeros) {
        soma = soma + numero
    }
    return soma
}

//Calcular o Saldo de cada Objeto.
function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
}

//Separando os Saldos Positivos, dos Negativos e Imprimindo na Tela
function imprimeSaldo(saldo, usuario) {
    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de R$ ${saldo.toFixed(2)}`)
    } else if (saldo == 0) {
        console.log(`${usuario.nome} está com R$ ${saldo.toFixed(2)}, portanto não possui dinheiro nessa conta`)        
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}

//Executando o código passando todos os usuários da Array
for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    imprimeSaldo(saldo, usuario)
}