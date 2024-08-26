const binarySearch = require('binary-search');

const arr = [-5, -3, -1, 0, 2, 3, 5];
const target = -1;

console.log(binarySearch(arr, target)); //output 2 jika benar (-1 berada di index ke 2)