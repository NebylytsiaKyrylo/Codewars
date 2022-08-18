/*
https://www.codewars.com/kata/55f81f9aa51f9b72a200002f

DESCRIPTION:
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find.
The numbers are always valid integer values between 1 and 2147483647, so no need
for type and error checking. The array contains at least one number and may
contain millions of numbers. So make sure your solution is optimized for speed.

Example:

Input: [ 1, 8, 4, 4, 4,  6, 1, 8 ]

Expected output: 6
*/

const findUnique = nums =>
  Object.values(
    nums.reduce((res, cur) => (cur in res ? (delete res[cur], res) : ((res[cur] = cur), res)), {})
  )[0];

//XOR
// const findUnique = numbers => numbers.reduce((res, cur) => res ^ cur, 0);

console.log(findUnique([1, 8, 4, 4, 6, 1, 8, 1, 8, 4, 4, 1, 8])); // 6
