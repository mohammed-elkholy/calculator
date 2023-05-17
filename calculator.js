//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

const port = "3000"

app.get("/", function(req,res){
  res.sendfile(__dirname + "/html/index.html");
});

app.post("/result",function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2
  res.send("the result is " + result);
});

app.listen(port,function(){
  console.log("server is runing on port " + port);
});
