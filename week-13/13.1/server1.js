// Import HTTP module
const http = require('http');

// Set port we will listen on
const PORT = 3333;

// Use HTTP module to create the server
const server = http.createServer(function
(request, response) {
    response.end("Hey this works! The URL is" + request.url)
});

// Start the server listening on a port
server.listen(PORT);


server.listen(PORT, function() {
    console.log("Server is now listening on http://localhost:%s", PORT);
});