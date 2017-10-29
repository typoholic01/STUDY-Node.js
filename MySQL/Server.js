/**
 * http://usejsdoc.org/
 */
//import
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var mysql = require('mysql');

//DB run
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

//run
http.createServer(function(req, res) {	
	//view File read
	var html = fs.readFileSync('./MySQL/view/index.html', 'utf8');
	
	if (req.url === '/list') {
		
		res.writeHead(200, {'Content-Type' : 'application/json'});
		con.query('SELECT * FROM `supplydefots`', function (err, rows, fields) {
			res.end(JSON.stringify(rows));
		});
	  } else {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(html, 'utf8');
		res.end();
	  }
}).listen(8081, function() {
	console.log("server is listening on 8081"); 	
});

function getJSON() {
	
}