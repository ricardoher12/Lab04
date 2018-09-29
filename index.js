var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/hello/:name/', sayHello);

function sayHello(request, response) {
    var name = request.params.name;
    response.send(JSON.stringify({"hello": name}));
  }