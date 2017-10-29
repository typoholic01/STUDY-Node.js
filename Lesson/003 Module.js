/**
 * http://usejsdoc.org/
 */
var circle = require('./Circle.js');
var square = require('./square.js');

console.log('========= lesson 1 =======');

console.log( 'The area of a circle of radius 4 is '
    + circle.area(4));

//bar.js
console.log('========= lesson 2 =======');
var mySquare = square(2);
console.log('The area of my square is ' + mySquare.area());
console.log('The circumference of my square is ' + mySquare.circumference());