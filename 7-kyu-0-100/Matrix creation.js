/*
https://www.codewars.com/kata/5a34da5dee1aae516d00004a

Create an identity matrix of the specified size( >= 0).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]
*/

function getMatrix(n) {
  let matrix = new Array(n).fill().map(() => new Array(n).fill(0));

  matrix.forEach((v, i) => (v[i] = 1));

  return matrix;
}

console.log(getMatrix(5));

/*[
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
]*/
