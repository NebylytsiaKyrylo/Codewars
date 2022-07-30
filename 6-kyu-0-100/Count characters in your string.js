/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

const count = string =>
  string
    .split('')
    .reduce((result, char) =>((result[char] = (result[char] || 0) + 1), result),{});


console.log(count('aba')); // { a: 2, b: 1 }
console.log(count('kirill')); // { k: 1, i: 2, r: 1, l: 2 }
console.log(count('')); // {}
