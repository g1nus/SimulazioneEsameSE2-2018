const express = require('express');
const app = express();
const PORT = 3000;

function string_square(s) {
  console.log(s);
  if(s !== null && s !== undefined){
    return s.length*s.length;
  }else{
    return -1;
  }
}

app.get('/', function(req, res){
	res.send("hello world :)");
});

app.get('/square', function(req, res){
  var s = req.query.string;
  var result = string_square(s);
  res.send({"result": result});
});

app.listen(PORT, function () {
  console.log('Listening on port 3000!');}
);
