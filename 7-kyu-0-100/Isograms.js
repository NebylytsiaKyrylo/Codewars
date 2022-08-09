/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1

DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only
letters is an isogram. Assume the empty string is an isogram.
Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str) {
  let arr = str.toLowerCase().split('');
  return arr.every(x => arr.indexOf(x) === arr.lastIndexOf(x));
}

//OPTION 2
// const isIsogram = str => new Set(str.toLowerCase()).size === str.length;

console.log(isIsogram(''));
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
