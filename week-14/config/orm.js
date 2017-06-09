var connect = require('./connection.js');

var orm = {
    allPartiesByCost: function(whatToSelect, table, valOfCol) {
        var queryString = "SELECT * FROM parties ORDER BY ? DESC";
        console.log(queryString);
        connect.query(queryString, [cost], function(err, result) {
            console.log(result);
        });
    }
    allPartiesByCost(),



};


module.exports = orm;