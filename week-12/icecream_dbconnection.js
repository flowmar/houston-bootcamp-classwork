// Require mysql package
var mysql = require('mysql');

// Create 'connection' variable
var connection = mysql.createConnection({
    // Host name and port number
    host: "localhost",
    port: 3306,

    // Username and password
    user: "root",
    password: "",
    // Database name
    database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});

connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
});