const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const data_courses = require("./data")


server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req,res) {
    return res.render("courses", { courses: data_courses } )
 }) 

 server.get("/about", function(req,res) {
    return res.render("about")
 }) 

server.get("/solo/:id", function(req,res){
    const id = req.params.id;

    // const name = res.send(id)
    const card = data_courses.find(function(card){
        if (card.name == id){
            return true
        }
    })
    if (!card){
        return res.status(404).render("not-found")
    }

    console.log(card)
    return res.render("solo", {course: card});
});

 // uma forma de fazer o 404 só pra digitação errada na URL
//  server.get("/*", function(req,res) {
//     return res.render("not-found")
//  }) 

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function() {
    console.log("Run Forest, run!")
})




