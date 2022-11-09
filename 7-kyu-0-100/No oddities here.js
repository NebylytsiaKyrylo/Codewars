/*
https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good
values in the order they are given.
*/

const noOdds = arr => arr.filter(v => !(v % 2));

console.log(noOdds([0, 1, 2, 3])); //[0,2]
