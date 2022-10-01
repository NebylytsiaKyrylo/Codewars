/*
https://www.codewars.com/kata/5254ca2719453dcc0b00027d

In this kata you have to create all permutations of a non
empty input string and remove duplicates, if present. This
means, you have to shuffle all letters from the input in
all possible orders.

Examples:

- With input 'a'
- Your function should return: ['a']
- With input 'ab'
- Your function should return ['ab', 'ba']
- With input 'aabb'
- Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/

function permutations(string) {
  let permutationsArray = [];

  if (string.length == 1) return [string];

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let restOfString = string.slice(0, i) + string.slice(i + 1);

    if (string.indexOf(currentChar) != i) continue;

    for (const permutation of permutations(restOfString)) {
      permutationsArray.push(currentChar + permutation);
    }
  }

  return permutationsArray;
}

console.log(permutations('aabb')); //[ 'aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa' ]
