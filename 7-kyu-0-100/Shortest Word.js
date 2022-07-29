/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

const findShort = s => s.split(' ').sort((a, b) => a.length - b.length)[0].length;
