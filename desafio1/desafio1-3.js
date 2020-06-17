const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias: ['Javascript', 'CSS']
    },
    {
        nome: 'Tuane',
        tecnologias: ['HTML', 'Node.js']
    }
]

function checaCss(usuarios){
   return usuarios.tecnologias.includes('CSS')
} 

for (let u = 0; u < usuarios.length; u++){
    const usuarioTrabalhaComCss = checaCss(usuarios[u])

    if(usuarioTrabalhaComCss){
        console.log(`${usuarios[u].nome} trabalha com CSS`)
    } else {
            console.log(`${usuarios[u].nome} trabalha apenas com ${usuarios[u].tecnologias} `) 

    }
   
}


// Soma das despesas das receitas