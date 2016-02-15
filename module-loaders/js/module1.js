/*jshint esversion: 6 */
var digits = [1, 2, 3];
var even_digits = digits.map( num => num % 2 === 0 ? num+=1 : num-=1 );
console.log(even_digits);   // [ 0, 2, 4, 6, 8 ]
