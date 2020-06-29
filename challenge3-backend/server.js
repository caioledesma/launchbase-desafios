const express = require("express")
const nunjucks = require("nunjucks")

const server = express()


server.use(express.static("public"))


server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req,res) {
    return res.render("courses")
 }) 

 server.get("/about", function(req,res) {
    return res.render("about")
 }) 

 // uma forma de fazer o 404 só pra digitação errada na URL
//  server.get("/*", function(req,res) {
//     return res.render("not-found")
//  }) 

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function() {
    console.log("Run Forest run!")
})




