/*
https://www.codewars.com/kata/5865918c6b569962950002a1

DESCRIPTION:
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer
of thecount of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0

Notes:
The first argument can be an empty string
The second string argument will always be of length 1
*/


const strCount = (str, letter) =>
  str.split('').reduce((count, cur) => cur == letter ? (count += 1) : count, 0);

//OPTION 2
/*
function strCount(str, letter) {
  let count = 0;

  for (const i of str) {
    if (i === letter) {
      count++;
    }
  }

  return count;
}
*/

console.log(strCount('hello', 'o')); //1
console.log(strCount('hello', 'l')); //2
