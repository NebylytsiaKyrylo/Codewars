/*
https://www.codewars.com/kata/51b6249c4612257ac0000005

DESCRIPTION:
Create a function that takes a Roman numeral as its argument and returns its value
as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to
be encoded separately, starting with the leftmost digit and skipping any 0s.
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII"
(2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter
in descending order.

Example:

solution('XXI'); // should return 21

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

Courtesy of rosettacode.org
*/

const symbolArray = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

function solution(roman) {
  let arabic = 0;

  symbolArray.forEach(v => {
    while (roman.startsWith(v[1])) {
      arabic += v[0];
      roman = roman.replace(v[1], '');
    }
  });

  return arabic;
}

console.log(solution('XXI')); //21
console.log(solution('I')); //1
console.log(solution('IV')); //4
console.log(solution('MMVIII')); //2008
console.log(solution('MDCLXVI')); //1666
