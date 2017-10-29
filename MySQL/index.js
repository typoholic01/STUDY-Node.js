/**
 * http://usejsdoc.org/
 */
var mysql = require('mysql');

var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  port: '3306',
      database: 'typoholic'
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});

con.query('SELECT * FROM `supplydefots`', function (err, rows, fields) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(rows));
});

con.end();