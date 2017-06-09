// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Create express app instance
var app = express();

// Specify the port number
const PORT = 3307;

// MySQL database connection information
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "seinfeld_db"
});

// Initiate MySQL connection

connection.connect(function(err) {
    if (err) {
        // Throw error if there is an error
        // err.stack only retrieves the relevant information as opposed to the entire error message
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// Routes

app.get("/", function(req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All the resulting records are stored in the variable "result"

    connection.query("SELECT * FROM actors", function(err, result) {

        // We then begin building out HTML elements for the page
        var html = "<h1> Actors </h1>";

        // Here we begin an unordered list
        html += "<ul>";

        /* We then use the retrieved 
        records from the datatbase to populate our HTML file */
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Actor: " + result[i].name + "</p>";
            html += "<p>Coolness Points: " + result[i].coolness_points + "</p></li>"
            html += "<p>Attitude: " + result[i].attitude + "</p></li>"
        }

        // We close our unordered list
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created
        res.send(html);
    });
});

// Initiate the listener
app.listen(PORT);