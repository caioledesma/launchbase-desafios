//IMC 

// const nome = 'João'
// const peso = 82
// const altura = 1.80

// const imc = peso / (altura*altura);

// if(imc >= 30){
//    console.log(`Olá ${nome}, você está acima do peso`)
// } else {
//     console.log(`Olá ${nome}, está tudo bem com você!`)
// };

// console.log(imc)

// APOSENTADORIA

const nome = 'Paulo';
const sexo = 'F';
const idade = 60;
const contribuicao = 20;


//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// M = 35 e F = 30
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

const regra = idade+contribuicao

if(sexo == 'M'){
    if(regra >= 95){
        console.log(`${nome}, você pode se aposentar`)//bloco de código se  for condição verdadeira
} else { 
            console.log(`Olá ${nome}, você não pode se aposentar, precisa de mais ${95-regra} anos`)}
        } else {
        console.log('Você não se enquadra nessas regras')    //bloco de código se  for condição falsa 

    }

                
    // if (condicao1) {
    //     if (condicao2) {
    //       // Condição 1 e 2 passaram
    //     } else {
    //       // Condição 1 passou, porém condição 2 não passou
    //     }
    //   } else {
    //     // Condição 1 não passou
    //   }

