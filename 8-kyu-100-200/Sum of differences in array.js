/*
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

const sumOfDifferences = arr => arr.sort((a, b) => b - a).reduce((sum, cur, i) => i > 0 ? sum += (arr[i - 1] - cur) : sum, 0);

console.log(sumOfDifferences([2, 1, 10]));
