const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose=require("mongoose");

const app=express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-anubhavg:T-0101@myfirstdatabase.ewcnv.mongodb.net/productsDB",{useNewUrlParser:true});

const itemSchema=new mongoose.Schema({
  title: String,
  description: String,
  price: Number
});

const Item=mongoose.model("Item",itemSchema);

app.get("/",function(req,res){
  res.render("home");
});

app.get("/user",function(req,res){
  res.render("user");
});

app.get("/shopkeeper",function(req,res){
  res.render("shopkeeper");
});

app.get("/product",function(req,res){
  res.render("list");
});

app.get("/user/login",function(req,res){
  res.render("user-login");
});

app.get("/vendor/login",function(req,res){
  res.render("vendor-login");
});

app.get("/user/register",function(req,res){
  res.render("user-register");
});

app.get("/vendor/register",function(req,res){
  res.render("vendor-register");
});

app.get("/vendor/list",function(req,res){
  res.render("list");
});

app.post("/user/login", function(req,res){
  res.render("success-login");
});

app.post("/vendor/login", function(req,res){
  res.render("success-login");
});

app.post("/vendor/register", function(req,res){
  res.render("success-register");
});

app.post("/user/register", function(req,res){
  res.render("success-register");
});

app.post("/vendor/list",function(req,res){
  const newItem=new Item({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
  });
  newItem.save(function(err){
    if(err){
      console.log(err);
    }
    else{
      res.render("item-added");
    }
  });
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
