var http = require('http');
var request = require("request");

var handleRequest = function (req, res) {
  console.log('Received request for URL: ' + req.url);
  res.writeHead(200);
  
};
var www = http.createServer(handleRequest);
www.listen(8080);
