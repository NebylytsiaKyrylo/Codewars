/*
https://www.codewars.com/kata/5659c6d896bc135c4c00021e

Write a function that takes a positive integer and returns the
next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017

Return -1 (for Haskell: return Nothing, for Rust: return None),
when there is no smaller number that contains the same digits.
Also return -1 when the next smaller number with the same digits
would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
*/


// OPTION 1 Such a decision I made first. For codewars I replaced findLastIndex with a loop for.
// Because findLastIndex is quite new and is not accepted on codewars. There are also other ways of
// solving this problem but not suitable for large numbers.

function nextSmaller(n) {
  let nArr = `${n}`.split('');

  if (nArr.every((v, i) => (i ? v >= nArr[i - 1] : true))) return -1;

  let numIndex = nArr.findLastIndex((v, i) => v > nArr[i + 1]);

  if (nArr[numIndex] == 1 && numIndex == 0) return -1;

  let numIndexSwap = nArr.findLastIndex(v => v < nArr[numIndex]);

  if (nArr[numIndexSwap] == 0 && numIndex == 0) return -1;

  [nArr[numIndex], nArr[numIndexSwap]] = [nArr[numIndexSwap], nArr[numIndex]];

  return +(
    nArr.slice(0, numIndex + 1).join('') +
    nArr.slice(numIndex + 1).sort((a, b) => b - a).join('')
  );
}

//OPTION 2 for codewars
/*
function nextSmaller(n) {
  let nArr = `${n}`.split('');

  if (nArr.every((v, i) => (i ? v >= nArr[i - 1] : true))) return -1;

  let numIndex, numIndexSwap;

  for (let i = nArr.length - 1; i >= 0; i--) {
    if (nArr[i] > nArr[i + 1]) {
      numIndex = i;
      break;
    }
  }

  if (nArr[numIndex] == 1 && numIndex == 0) return -1;

  for (let i = nArr.length - 1; i >= 0; i--) {
    if (nArr[i] < nArr[numIndex]) {
      numIndexSwap = i;
      break;
    }
  }

  if (nArr[numIndexSwap] == 0 && numIndex == 0) return -1;

  [nArr[numIndex], nArr[numIndexSwap]] = [nArr[numIndexSwap], nArr[numIndex]];

  return +(
    nArr.slice(0, numIndex + 1).join('') +
    nArr.slice(numIndex + 1).sort((a, b) => b - a).join('')
  );
}
*/

console.log(nextSmaller(21)); //12
console.log(nextSmaller(2007)); //-1
console.log(nextSmaller(1134)); //-1
console.log(nextSmaller(1111)); //-1
console.log(nextSmaller(907)); //790
console.log(nextSmaller(531)); //513
console.log(nextSmaller(135)); //-1
console.log(nextSmaller(2071)); //2017
console.log(nextSmaller(1027)); //-1
console.log(nextSmaller(414)); //144
console.log(nextSmaller(123456798)); //123456789
console.log(nextSmaller(123456789)); //-1
console.log(nextSmaller(1234567908)); //1234567890
console.log(nextSmaller(11122345669)); //-1
