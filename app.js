const express = require('express');
const app = express();
const PORT = 3000;

function string_square(s) {
  console.log("the received string is " + s);
  console.log("length : " + s.length);
}

app.get('/', function(req, res){
	res.send("hello world :)");
});

app.listen(PORT);
