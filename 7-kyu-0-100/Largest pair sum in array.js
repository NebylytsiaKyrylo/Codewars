/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example:
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/

const largestPairSum = nums =>
  nums
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((sum, cur) => sum + cur, 0);

    
//OPTION 2
/*
const largestPairSum = nums => {
  let [a, b] = nums.sort((a,b) => b - a);
  return a + b;
}
*/

console.log(largestPairSum([10, 14, 2, 23, 19])); //42
console.log(largestPairSum([99, 2, 2, 23, 19])); //122
