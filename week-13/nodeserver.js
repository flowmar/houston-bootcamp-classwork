var http = require('http');

function requestHandler(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello world");
}

var server = http.createServer(requestHandler);

server.listen(3000);


// Require a url module
var url = require('url');
var parsedURL = url.parse("http://www.example.com/profile?name=barry");