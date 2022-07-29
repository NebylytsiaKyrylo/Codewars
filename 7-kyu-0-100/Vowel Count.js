/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3

DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

const getCount = str => /[aeiou]/.test(str) ? str.match(/[aeiou]/g).length : 0;
