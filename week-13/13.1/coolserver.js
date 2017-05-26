 // Import HTTP module
 const http = require('http');

 // Set port to listen on 
 const PORT = 7000;

 // Use HTTP module to create the server
 const server = http.createServer(function(request, response)) {
 response.end("Yeaaayuuhhhh" + _ request.url) + "is your URL")
 );

 // Start the server listening on a port
 server.listen(PORT);


 server.listen(PORT, function() {
     console.log("Server is now listening on http://localhost:%s", PORT);
 });