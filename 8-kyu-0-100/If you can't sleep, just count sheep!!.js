/*
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

DESCRIPTION:
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur:
"1 sheep...2 sheep...3 sheep...".

Input will always be valid, i.e. no negative integers.
*/

const countSheep = num => {
  let str = '';

  for (let sheep = 1; sheep <= num; sheep++) {
    str += `${sheep} sheep...`;
  }

  return str;
};
