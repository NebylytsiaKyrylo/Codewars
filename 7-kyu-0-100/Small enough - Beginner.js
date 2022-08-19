/*
https://www.codewars.com/kata/57cc981a58da9e302a000214

DESCRIPTION:
You will be given an array and a limit value. You must check that all values
in the array are below or equal to the limit value. If they are, return true.
Else, return false.

You can assume all values in the array are numbers.
*/

const smallEnough = (a, limit) => a.every(v => v <= limit);

//OPTION 2
// const smallEnough = (a, limit) => Math.max(...a) <= limit;

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
