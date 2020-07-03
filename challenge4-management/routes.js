const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res) {
    return res.send('teachers')
})

routes.get('/student', function(req, res) {
    return res.send('student')
})

routes.use(function(req, res){
    res.status(404).render("not-found")
})

//parei na 4a aula  Criando as rotas de instrutores e Estrutura HTML e CSS do projeto

module.exports = routes