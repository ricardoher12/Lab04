var http = require('http')
var finalhandler = require('finalhandler')
var Router = require('router')
const PORT = 3000; 

// create the router and server
var router = new Router()
var server = http.createServer(function onRequest(req, res) {
  router(req, res, finalhandler(req, res))
})
 
// register a route and add all methods
router.route('/hello/:name')
  .get(function (req, res) {
    // this is GET /pet/:id
    var name = req.params.name;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ hello: name }))
  })

  // register a route and add all methods
router.route('/')
.get(function (req, res) {
  // this is GET /pet/:id
  var name = req.params.name;
  res.setHeader('Content-Type', 'application/json')
  res.end("Welcome")
})
 
// make our http server listen to connections
server.listen(PORT);
console.log("The server is listening on port:" + PORT.toString());