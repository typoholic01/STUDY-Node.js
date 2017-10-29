/**
 * http://usejsdoc.org/
 */
// readFile.js 
var fs = require('fs');
 
// 동기적 읽기
var text = fs.readFileSync('G:\Sort.txt', 'utf8');
console.log(text);
 
// 비동기적 읽기
fs.readFile('G:\Sor2t.txt', 'utf8', function(err, data) {
	if (err) {
		console.log(err);
	} else {
	    console.log(data);		
	}
});

//writeFile.js 
var data = 'Hello FileSystem';
 
fs.writeFile('G:/text.txt', data, 'utf8', function(err) {
	if (err) {
		console.log(err);
	} else {
	    console.log('비동기적 파일 쓰기 완료');	
	}
});
 

var dir = 'G:/bamtoki/';

fs.writeFileSync('G:/text2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');

//readDir
fs.readdir(dir,readDir);

//메소드 분할
function readDir(err,files) {
	if (err) {
		console.log(err);
	} else {
		for (var i = 0; i < files.length; i++) {
			console.log(dir + files[i]);			
			fs.stat(dir + files[i], stat);
		}
	}
}
function stat(err, stats) {
	if (err) {
		console.log(err);
	} else {
		if (stats.isDirectory()) {
			
		}
	}
}