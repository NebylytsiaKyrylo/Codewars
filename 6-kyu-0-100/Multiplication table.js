/*
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9

for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

1  2  3  4  5
2  4  6  8 10
3  6  9 12 15
4  8 12 16 20
5 10 15 20 25

for given example, the return value should be:
[[1,2,3,4,5], [2,4,6,8,10], [3,6,9,12,15], [4,8,12,16,20], [5,10,15,20,25]];
*/

const multiplicationTable = (size) => {
  let table = [];

  for (let i = 1; i <= size; i++) {
    let rowTable = [];
    for (let j = 1; j <= size; j++) {
      rowTable.push(i * j);
    }
    table.push(rowTable);
  }

  return table;
};

console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
console.log(multiplicationTable(5)); // [[1,2,3,4,5], [2,4,6,8,10], [3,6,9,12,15], [4,8,12,16,20], [5,10,15,20,25]]
