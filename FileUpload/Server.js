/**
 * http://usejsdoc.org/
 */
//import
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');


http.createServer(function(req, res) {	
	//view File read
	var text = fs.readFileSync('./FileUpload/view/Index.html', 'utf8');
	
	if (req.url === '/fileupload') {
	    var form = new formidable.IncomingForm();
	    
	    form.parse(req, function (err, fields, files) {
	    	var oldpath = files.filetoupload.path;
	        var newpath = 'C:/Users/mun49/Downloads/ZIG/' + files.filetoupload.name;
	        fs.rename(oldpath, newpath, function (err) {
	        	
	          if (err) { 
	        	  throw err;
        	  }
	          
	          res.write('File uploaded and moved!');
	          res.end();
	        });
	    });
	  } else {
		res.writeHead(200, {'Content-Type' : 'text/html'}); 
		res.write(text, 'utf8');
		res.end();
	  }
}).listen(8081, function() {
	console.log("server is listening on 8081"); 	
});