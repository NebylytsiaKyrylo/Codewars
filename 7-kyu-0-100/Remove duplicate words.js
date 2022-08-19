/*
https://www.codewars.com/kata/5b39e3772ae7545f650000fc

DESCRIPTION:
Your task is to remove all duplicate words from a string,
leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

const removeDuplicateWords = s => Array.from(new Set(s.split(' '))).join(' ');

//OPTION 2
/*
const removeDuplicateWords = s =>
  s
    .split(' ')
    .reduce((res, cur) => res.includes(cur) ? res : res.concat(cur), [])
    .join(' ');
*/

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
);
// 'alpha beta gamma delta'
