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



function pegaReceita(numUser){
    return usuarios[numUser].receitas
}

const receita0 = pegaReceita(0)
const receita1 = pegaReceita(1)
const receita2 = pegaReceita(2)

function pegaDespesas(numUser){
  return usuarios[numUser].despesas
}

const despesa0 = pegaDespesas(0)
const despesa1 = pegaDespesas(1)
const despesa2 = pegaDespesas(2)


// console.log(receita0)
// console.log(despesa0)

// console.log(receita1)
// console.log(despesa1)

// console.log(receita2)
// console.log(despesa2)


// Sum of all incomes
let somaReceitas = 0;

  function totalReceita(item) {  
    for (let i = 0; i < item.length; i++){
    somaReceitas = somaReceitas + item[i] 
  } return somaReceitas
} 

const userTotalReceita0 = totalReceita(receita0)
const userTotalReceita1 = totalReceita(receita1)
const userTotalReceita2 = totalReceita(receita2)

// Sum of all expenses
let somaDespesas = 0;

function totalDespesas(xxx){
  for (let i = 0; i < xxx.length; i++){
    somaDespesas = somaDespesas + xxx[i]
  } return somaDespesas
}
const userTotalDespesa0 = totalDespesas(despesa0)
const userTotalDespesa1 = totalDespesas(despesa1)
const userTotalDespesa2 = totalDespesas(despesa2)

// Code for check functions

// console.log(userTotalReceita0)
// console.log(userTotalDespesa0)

// console.log(userTotalReceita1)
// console.log(userTotalDespesa1)

// console.log(userTotalReceita2)
// console.log(userTotalDespesa2)

//Function that need to get the sum of the both parts and subtract 
function calculaSaldo(w, y){
  return (w) - (y)
}

const userSaldo0 = calculaSaldo(userTotalReceita0, userTotalDespesa0);
const userSaldo1 = calculaSaldo(userTotalReceita1, userTotalDespesa1);
const userSaldo2 = calculaSaldo(userTotalReceita2, userTotalDespesa2);

console.log(userSaldo0.toFixed(1))
console.log(userSaldo1.toFixed(1))
console.log(userSaldo2.toFixed(1))






// function calculaSaldo(receitas, despesas){
// }


  // function receitaTeste(item){
  //   const acharReceita = usuarios[item].receitas
  //   return 
  // }

  // const nome1 = receitaTeste(0)
  // console.log(acharReceita)

// //   const soma = 0;


// function meuTeste(item){
//     soma += item;
// }

// usuarios.despesas.forEach(meuTeste)

// console.log(meuTeste)


// var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let soma = 0;

// function tabuadaDe2(item) {
//   soma += item;
// }
 
// numeros.forEach(tabuadaDe2)
// console.log(soma)


// function somarReceitas(item, indice){
//   soma += item;
//   usuarios[indice] = total;
// }

// usuarios.receitas(somarReceitas)
// console.log(soma)


// var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var total = 0;
 
// function somar(item) {
//     total += item; 
// }
 
// numeros.forEach(somar);
// console.log(total);