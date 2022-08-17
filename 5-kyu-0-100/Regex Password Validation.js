/*
https://www.codewars.com/kata/52e1476c8147a7547a000811

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

const REGEXP = /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?!.*\W)(?!.*_).{6,})$/;

console.log(REGEXP.test('fjd3IR9'));
console.log(REGEXP.test('4fdg5Fj3'));
console.log(REGEXP.test('djI38D55'));
console.log(REGEXP.test('djI3_8D55'));
console.log(REGEXP.test('djI38D55@@'));
