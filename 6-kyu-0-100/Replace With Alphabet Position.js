/*
https://www.codewars.com/kata/546f922b54af40e1e90001da

DESCRIPTION:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
  return text
    .split('')
    .filter((char) => /[a-z]/i.test(char))
    .map((char) => char.toLowerCase().charCodeAt() - 96)
    .join(' ');
}

// function alphabetPosition(text) {
//   if (text.match(/[a-z]/gi)) {
//     return text
//       .match(/[a-z]/gi)
//       .join(' ')
//       .replace(/\w/gi, (x) => x.toLowerCase().charCodeAt() - 96);
//   }
//   return '';
// }
