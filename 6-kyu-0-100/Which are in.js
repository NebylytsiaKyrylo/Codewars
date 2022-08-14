/*
https://www.codewars.com/kata/550554fd08b86f84fe000a58

DESCRIPTION:
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical
order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.
*/

const inArray = (arr1, arr2) =>
  arr1.reduce((res, cur) => arr2.join(' ').includes(cur) ? res.concat(cur) : res, []).sort();

//OPTION 2
// const inArray = (arr1, arr2) => arr1.filter(v => arr2.join(' ').includes(v)).sort();

const a1 = ['arp', 'live', 'strong'];
const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
const a3 = ['tarp', 'mice', 'bull'];
const a4 = ['xyz', 'live', 'strong'];
const a5 = ['live', 'strong', 'arp'];

console.log(inArray(a1, a2)); //[ 'arp', 'live', 'strong' ]
console.log(inArray(a3, a2)); //[]
console.log(inArray(a4, a2)); //[ 'live', 'strong' ]
console.log(inArray(a5, a2)); //[ 'arp', 'live', 'strong' ]
