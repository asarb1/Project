const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express()
const port = 3000

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.render("home")
})

app.get("/despre", function(req, res){
  res.render("despre")
})

app.get("/servicii", function(req, res){
  res.render("servicii")
})

app.get("/magazin", function(req, res){
  res.render("magazin")
})

app.get("/contact", function(req, res){
  res.render("contact")
})

app.get("/testimonial", function(req, res){
  res.render("testimonial")
})

app.get("/feedbackform", function(req, res){
  res.render("feedbackform")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
