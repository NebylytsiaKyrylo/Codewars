/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b

Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
*/

//Solution, look at some examples for me
// example 1
// " * ", space - 1, * - 1, space - 1
// "***", space - 0, * - 3, space - 0

// example 2
// "  *  ", space - 2, * - 1, space - 2
// " *** ", space - 1, * - 3, space - 1
// "*****"  space - 0, * - 5, space - 0

// example 3
// "     *     ", space - 5, * - 1, space - 5
// "    ***    ", space - 4, * - 3, space - 4
// "   *****   ", space - 3, * - 5, space - 3
// "  *******  ", space - 2, * - 7, space - 2
// " ********* ", space - 1, * - 9, space - 1
// "***********"  space - 0, * - 11, space - 0

function towerBuilder(nFloors) {
  let tower = [];

  for (let i = 1; i <= nFloors; i++) {
    let space = ' '.repeat(nFloors - i);
    let star = '*'.repeat((i * 2) - 1);
    tower.push(`${space}${star}${space}`);
  }

  return tower;
}

//OPTION 2
/*
function towerBuilder(nFloors) {
  return Array.from({length: nFloors}, (_, i) => {
    let space = ' '.repeat(nFloors - i - 1);
    let star = '*'.repeat(i * 2 + 1);
    return `${space}${star}${space}`;
  });
}
*/

console.log('1', towerBuilder(1));
console.log('2', towerBuilder(2));
console.log('3', towerBuilder(3));
console.log('6', towerBuilder(6));
