/*
https://www.codewars.com/kata/52b757663a95b11b3d00062d

DESCRIPTION:
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string,
and returns the same string with all even indexed characters in each word upper cased,
and all odd indexed characters in each word lower cased.
The indexing just explained is zero based, so the zero-ith index is even,
therefore that character should be upper cased and you need to start over
for each word.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be
separated by a single space(' ').

Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

const toWeirdCase = string =>
  string
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((char, i) => (i % 2 ? char.toLowerCase() : char.toUpperCase()))
        .join('')
    )
    .join(' ');


//OPTION 2
// const toWeirdCase = string => string.replace(/\w{1,2}/g, x => x[0].toUpperCase() + x.slice(1));


console.log(toWeirdCase('This is a test')); //'ThIs Is A TeSt'
