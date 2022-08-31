/*
https://www.codewars.com/kata/563e320cee5dddcf77000158

DESCRIPTION:
It's the academic year's end, fateful moment of your school report.
The averages must be calculated. All the students come to you and entreat
you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

const getAverage = marks => Math.floor(marks.reduce((res, cur) => res + cur / marks.length, 0));

console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); //1
console.log(getAverage([1, 2, 3, 4, 5])); //3
console.log(getAverage([2, 2, 2, 2])); //2
console.log(getAverage([1, 5, 87, 45, 8, 8])); //25
console.log(getAverage([15, 18, 7, 15, 13, 16, 12, 5, 14, 12])); //12
