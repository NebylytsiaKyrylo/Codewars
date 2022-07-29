/*
https://www.codewars.com/kata/5b180e9fedaa564a7000009a

DESCRIPTION:
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

More examples in test cases. Good luck!
*/

function solve(s) {
  let upperLength = s.split('').filter((x) => x.match(/[A-Z]/)).length;
  let lowerLength = s.split('').filter((x) => x.match(/[a-z]/)).length;
  return upperLength > lowerLength ? s.toUpperCase() : s.toLowerCase();
}

// function solve(s) {
//   return s === s.toLowerCase() || s === s.toUpperCase()
//     ? s
//     : s.match(/[A-Z]/g).length > s.match(/[a-z]/g).length
//     ? s.replace(/[a-z]/g, (x) => x.toUpperCase())
//     : s.replace(/[A-Z]/g, (x) => x.toLowerCase());
// }
