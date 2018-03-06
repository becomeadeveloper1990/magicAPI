var express = require('express');
var request = require('request');

var app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.listen(3000, () => {
  console.log("The server has started on port 3000");
});
