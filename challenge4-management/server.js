const express = require("express")
const nunjucks = require("nunjucks")

const server = express() // a variável EXPRESS se transformou numa função express()
const videos = require("./data")


//CONFIGURANDO O ESTILO
//configurar o servidor para usar arquivos estáticos, ele vai ficar observando essa pasta public pra servir os arquivos estáticos
server.use(express.static("public"))


//CONFIGURANDO TEMPLATE ENGINE, que é setar o motor de view, no começo foi HTML depois muda pra NJK
//server.set("view engine", "html")

//CONFIGURANDO O SERVER
//configurando o sever para ler arquivos .njk 
server.set("view engine", "njk")


//CONFIGURANDO NUNJUCKS, primeiro ele pede o caminho que ele tem que buscar os arquivos, 2o parametro ele pede opções que pelo Mayk é simples pq é a express, sem mta explicação
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

//CRIANDO ROTAS 

//PRIMEIRA AULA
//Parâmetro req é o servidor ouvindo alguma coisa e o parâmetro res é a resposta dele
//a ideia é: servidor, pegue essa rota no caso, essa barra e execute essa função
//o send dentro do res é uma função do objeto res
// server.get("/", function(req, res) {
//     return res.send("Hello!3")
// })

//AULA CRIANDO TEMPLATE ENGINE - Módulo template engine aula 2
//agora o return dele vai ser outra coisa, res.render() que é para conectar com o nunjucks, que é a renderização dos arquivos do nunjucks que chamaos por um método, que é a renderização de uma view, não precisa de HTML pq isso passamos na linha acima do server.set
server.get("/", function(req, res) {
    const data_about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/42016457?s=460&u=56d29a592d0d5345015a1f78104033c11880484d&v=4",
        name: "Caio Ledesma",
        role: "Fullstack Developer",
        description: 'Estudante na <a href="https://rocketseat.com.br/" target="blank">Rocketseat</a>',
        links: [
            {name: "Github", url: "https://github.com/caioledesma"},
            {name: "LinkedIn", url: "https://www.linkedin.com/in/caioledesma/"}
        ]
    }
    return res.render("about", {about: data_about})
})

//FAZER A ROTA PRA PORTFOLIO

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", {items: videos})
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        if (video.id == id){
            return true
        }
    })
    if (!video){
        return res.send("Video Not Found!")
    }

    return res.render("video", { item: video })
})
//RODAR O SERVER
//chamamos a const server e coloca ele pra ouvir a função listen    
// a função listen recebe dois parâmetros, a porta e outra função dentro
server.listen(5000, function() {   
    console.log('Run server, run!')
})