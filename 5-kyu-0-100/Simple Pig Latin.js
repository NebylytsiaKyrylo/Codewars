/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f

DESCRIPTION:
Move the first letter of each word to the end of it, then add "ay"
to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/


const pigIt = str => str.replace(/(\w)(\w+)?(\s|$)/g, '$2$1ay$3');

//OPTION 2
// const pigIt = str => str.split(' ').map(v => v.replace(/^(\w)(\w+)?/, '$2$1ay')).join(' ');

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')); // elloHay orldway !
console.log(pigIt('O tempora o mores !')); // Oay emporatay oay oresmay !
