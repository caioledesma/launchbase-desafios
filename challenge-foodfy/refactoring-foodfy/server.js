const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

const receipts = require("./data") 


server.get("/detalhe/:index", function (req, res) {
    const recipes = [...receipts]; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
  
    const xxx = receipts.find(function(xxx){
        if (receipts[xxx] == recipeIndex){
            console.log(xxx)
            return true
        }
    })
    // console.log(receipts[recipeIndex]);
    return res.render("detalhe", {items: receipts[recipeIndex]})
})


//   server.get('/detalhe', function(req,res){
//     return res.render("detalhe", { items: receipts})

// })


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


server.listen(5000, function(req, res){
    console.log('Running like a G6!')
})

