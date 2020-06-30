const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

const recipes = require("./data") 

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure("views", {
    express: server
})

server.get('/', function(req,res){
    return res.render("index")
})

server.get('/sobre', function(req,res){
    return res.render("sobre")
})

server.get('/receitas', function(req,res){
    return res.render("receitas")
})

server.get('/detalhe', function(req,res){
    return res.render("detalhe", { items: recipes})
})

server.listen(5000, function(req, res){
    console.log('Running like a Gsix!')
})

