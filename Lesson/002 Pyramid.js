/**
 * http://usejsdoc.org/
 */

//별 순차 증가
var star = '';

console.log('========= lesson 1 =======');

for (var i = 0; i < 10; i++) {
	star += '*';
	console.log(star);
}

//역 순차증가
console.log('========= lesson 2 =======');

for (var i = 1; i <= 10; i++) {
	star = '';
	
	for (var j = i; j < 10; j++) {
		star += ' ';
	}
	for (var k = 0; k < i; k++) {
		star += '*';
	}	
	console.log(star);
}

//피라미드 증가
console.log('========= lesson 3 =======');

for (var i = 0; i < 10; i++) {
	star = '';
	
	for (var j = i + 1; j < 10; j++) {
		star += ' ';
	}
	for (var k = 0; k < i * 2 + 1; k++) {
		star += '*';
	}	
	console.log(star);
}

//항아리 증가
console.log('========= lesson 4 =======');

for (var i = 0; i < 10; i++) {
	star = '';
	
	if (i < 5) {
		for (var j = i + 1; j < 10; j++) {
			star += ' ';
		}
		for (var k = 0; k < i * 2 + 1; k++) {
			star += '*';
		}		
		console.log(star);		
	} else {
		for (var k = 0; k < i + 1; k++) {
			star += ' ';
		}
		for (var j = i * 2 + 1; j < 18; j++) {
			star += '*';
		}		
		console.log(star);		
	}
	
	
}

//함수화
function callStar(num) {
	var star = '';
	
	for (var i = 0; i < num; i++) {
		star += '*';
	}
	
	return star;
}

function callSpace(num) {
	var space = '';
	
	for (var i = 0; i < num; i++) {
		space += ' ';
	}
	
	return space;
}

console.log('========= lesson 5 =======');

for (var i = 0; i < 9; i++) {
	if (i < 5) {
		console.log(
				callSpace(4 - i) + callStar(2 * i + 1)
		);
	} else {
		console.log(
				callSpace(i - 4) + callStar(17 - i * 2)
		);
	}
}
