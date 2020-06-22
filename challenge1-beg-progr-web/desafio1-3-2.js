const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
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
    }
  ];


let somaReceitas = 0;
function totalReceitas (usuarios) {
    for (let i = 0; i < usuarios.receitas.length; i++){
    somaReceitas += usuarios.receitas[i]}
        //console.log(i)
    console.log(somaReceitas)
} 

 const receitaUsuario0 = totalReceitas(usuarios[0])
// const receitaUsuario1 = totalReceitas(usuarios[1])
// const receitaUsuario2 = totalReceitas(usuarios[2])

console.log(receitaUsuario0)

let somaDespesa = 0;
function totalDespesas (usuarios){
    for (let d = 0; d < usuarios.despesas.length; d++) {
        somaDespesa = somaDespesa + usuarios.despesas[d]}
    //console.log(somaDespesa)
    }


// const despUsuario0 = totalDespesas(usuarios[0])
// const despUsuario1 = totalDespesas(usuarios[1])
// const despUsuario2 = totalDespesas(usuarios[2])


let calculo = 0;
function calculaSaldo(receitas, despesas) {
return calculo = receitas - despesas
} 

let user0 = calculaSaldo(276.8, 118.69)

if(user0 >= 0){
    console.log(`${usuarios[0].nome} possui um saldo POSITIVO de ${user0}`)
} else {
    console.log(`${usuarios[0].nome} possui um saldo NEGATIVO de ${user0}`)
}

let user1 = calculaSaldo(561, 436.1)

if(user1 >= 0){
    console.log(`${usuarios[1].nome} possui um saldo POSITIVO de ${user1}`)
} else {
    console.log(`${usuarios[1].nome} possui um saldo NEGATIVO de ${user1}`)
}

let user2 = calculaSaldo(1076.6, 916.19)

if(user2 >= 0){
    console.log(`${usuarios[2].nome} possui um saldo POSITIVO de ${user2}`)
} else {
    console.log(`${usuarios[2].nome} possui um saldo NEGATIVO de ${user2}`)
}

// // 1º elemento do array
// function somaReceita0(usuarios){
//     return (usuarios[0].receitas[0] + usuarios[0].receitas[1] + usuarios[0].receitas[2] + usuarios[0].receitas[3])
// }
// const mostra0 = somaReceita0(usuarios) 
// console.log(mostra0)

// // 2º elemento do array
// function somaReceita1(usuarios){
//     return (usuarios[1].receitas[0] + usuarios[1].receitas[1] + usuarios[1].receitas[2])
// }
// const mostra1 = somaReceita1(usuarios) 
// console.log(mostra1)

// // 3º elemento do array
// function somaReceita2(usuarios){
//     return (usuarios[2].receitas[0] + usuarios[2].receitas[1] + usuarios[2].receitas[2] + usuarios[2].receitas[3])
// }
// const mostra2 = somaReceita2(usuarios) 
// console.log(mostra2.toFixed(1))

// // user = 1
// // array = 0

// // 1º Elemento despesa
// function somaDespesa0(usuarios){
//     return (usuarios[0].despesas[0] + usuarios[0].despesas[1] + usuarios[0].despesas[2])
// }
// const mostra3 = somaDespesa0(usuarios)
// console.log(mostra3)

// // 2º Elemento despesa
// function somaDespesa1(usuarios){
//     return (usuarios[1].despesas[0] + usuarios[1].despesas[1] + usuarios[1].despesas[2])
// }
// const mostra4 = somaDespesa1(usuarios)
// console.log(mostra4)

// // 3º Elemento despesa
// function somaDespesa2(usuarios){
//     return (usuarios[2].despesas[0] + usuarios[2].despesas[1])
// }
// const mostra5 = somaDespesa2(usuarios)
// console.log(mostra5)



// console.log(`${usuarios.nome[0]} tem um s`)




// // function totalReceita(usuarios){
// //     const soma = 0;
// //     for(let i = 0; i < usuarios.receitas.length; i++){
// //     soma = soma + usuarios[0].receitas[i] };
// //     return console.log(i)
// // }


// //     let soma = 0;
// // for(let i = 0; i < usuarios[0].receitas.length; i++){
    
// //     soma = soma += usuarios[0].receitas[i]
// //     console.log(`A receita total do ${usuarios[0].nome} é de ${soma}`) };



// // function somaNumeros(numeros) {
// //   // Soma todos números dentro do array "numeros"
// // }

// // function exemplo(parametro){
// //     parametro + SubParametro 
// //     multiplicado 
// // }


// // Posso criar uma função pra somar as despesas de cada nome 

// // funcção ( aaqui dentro o parametro)

// // repito essa função 3X pra cada nome, e dentro do parametro passo o usuario.nome[posição no array]




