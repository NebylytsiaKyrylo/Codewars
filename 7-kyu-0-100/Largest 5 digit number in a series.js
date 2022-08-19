/*
https://www.codewars.com/kata/51675d17e0c1bed195000001

In the following 6 digit number: 283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number: 1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five
consecutive digits found within the number given. The number will be
passed in as a string of only digits. It should return a five digit integer.
The number passed may be as large as 1000 digits.
*/

const solution = dig =>
  [...dig].reduce((num, _, i) => +dig.slice(i, i + 5) > num ? +dig.slice(i, i + 5) : num, 0);

//OPTION 2
/*
function solution(digits) {
  let result = 0;

  for (let i = 0; i < digits.length; i++) {
    let subNumbers = +digits.slice(i, i + 5);
    if (subNumbers > result) result = subNumbers;
  }

  return result;
}
*/

console.log(solution('1234567898765')); //98765
console.log(solution('731674765')); //74765
