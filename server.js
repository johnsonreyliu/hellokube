var http = require('http');
var request = require("request");

var handleRequest = function (req, res) {
  console.log('Received request for URL: ' + req.url);
  res.writeHead(200);
  // response.end('Hello World!' + request.url);

  if (req.url == "/mc") {
    console.log('went to mc');
    var options = {
      method: 'GET',
      url: 'https://tile-management-console.garage-catalog-prod.us-south.containers.appdomain.cloud/',
      headers:
      {
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
      res.end(body);
    });
  } else if (req.url == "/sb") {
    console.log('went to service broker');
    var options = {
      method: 'GET',
      url: 'https://tile-service-broker.garage-catalog-prod.us-south.containers.appdomain.cloud/',
      headers:
      {
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
      res.end(body);
    });
  }
};
var www = http.createServer(handleRequest);
www.listen(8080);
