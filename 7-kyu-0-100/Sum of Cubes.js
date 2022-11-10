/*
https://www.codewars.com/kata/59a8570b570190d313000037

Write a function that takes a positive integer n, sums all the
cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

const sumCubes = n => (n ** 2 * (n + 1) ** 2) / 4;

// OPTION 2
// const sumCubes = n => (Math.pow(n, 2) * Math.pow(n + 1, 2)) / 4;

// OPTION 3
// const sumCubes = n => Array.from({ length: n }, (_, v) => (v + 1) ** 3).reduce((sum, cur) => sum + cur);

console.log(sumCubes(1));
console.log(sumCubes(2));
console.log(sumCubes(3));
console.log(sumCubes(4));
console.log(sumCubes(10));
console.log(sumCubes(123));
