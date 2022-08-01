/*
https://www.codewars.com/kata/580a4734d6df748060000045

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order

"yes, descending" - if the numbers in the array are sorted in a descending order

"no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
  if (array.every((cur, i) => i > 0 ? cur >= array[i - 1] : true)) {
    return 'yes, ascending';
  }
  if (array.every((cur, i) => i > 0 ? cur <= array[i - 1] : true)) {
    return 'yes, descending';
  }
  return 'no';
}

/*
function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}
*/

console.log(isSortedAndHow([1, 2])); // 'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])); // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); // 'no'
