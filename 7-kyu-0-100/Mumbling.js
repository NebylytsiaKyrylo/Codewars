/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

DESCRIPTION:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

const accum = (s) =>
  s
    .toLowerCase()
    .split('')
    .map((v, i) => v.toUpperCase() + v.repeat(i))
    .join('-');

// const accum = (s) =>
//   s
//     .toLowerCase()
//     .split('')
//     .map((v, i) => v.repeat(i + 1))
//     .join('-')
//     .replace(/(-|^)[a-z]/g, x => x.toUpperCase())
