/*
https://www.codewars.com/kata/596f72bbe7cd7296d1000029

Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of
ALL elements within an array, including any within inner-level arrays.

For example:

deepCount([1, 2, 3]); >>>>> 3

deepCount(["x", "y", ["z"]]); >>>>> 4

deepCount([1, 2, [3, 4, [5]]]); >>>>> 7

The input will always be an array.
*/


const deepCount = a =>
  a.reduce((res, cur) => res + (Array.isArray(cur) ? deepCount(cur) : 0), a.length);


//OPTION 2
/*
function deepCount(array) {
  let length = array.length;

  for (const item of array) {
    if (Array.isArray(item)) {
      length += deepCount(item);
    }
  }

  return length;
}
*/

console.log(deepCount([])); // 0
console.log(deepCount([1, 2, 3])); // 3
console.log(deepCount(['x', 'y', ['z']])); // 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7
console.log(deepCount([[[[[[[[[]]]]]]]]])); // 8
