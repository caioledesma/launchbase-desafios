//Printar o endereço

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: "260"
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);


const programador = {
    nome: "joão",
    idade: 24,
    tecnologias: [
        {
            nome: "C++",
            especialidade: "desktop"
        },
        {
            nome: "Python",
            especialidade: "Data Science"
        },
        {
            nome: "Javascript",
            especialidade: "web e Mobile"
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com a especialidade ${programador.tecnologias[0].especialidade}`);
