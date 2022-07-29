/*
https://www.codewars.com/kata/5808e2006b65bff35500008f

DESCRIPTION:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

const position = letter => `Position of alphabet: ${letter.charCodeAt() - 96}`;
