/*
https://www.codewars.com/kata/55908aad6620c066bc00002a

DESCRIPTION:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

const XO = str =>
  (/x/.test(str) ? str.match(/x/gi).length : 0) === (/o/.test(str) ? str.match(/o/gi).length : 0);

// const XO = (str) => {
//   let arr = str.toLowerCase().split('');
//   let x = arr.filter((a) => a === 'x').length;
//   let o = arr.filter((a) => a === 'o').length;
//   return x === o;
// };
