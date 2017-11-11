/**
 * http://usejsdoc.org/
 */
var http = require('http');

//run
http.createServer(function(request, response) {
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello Node.js\n');
	response.end('END\n');
}).listen(80);

//console
console.log('server run');