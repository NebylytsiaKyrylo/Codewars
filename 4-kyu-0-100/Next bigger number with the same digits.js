/*
https://www.codewars.com/kata/55983863da40caa2c900004e

Create a function that takes a positive integer and returns the
next bigger number that can be formed by rearranging its digits.

For example:
12 ==> 21
513 ==> 531
2017 ==> 2071

nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1

nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
*/

// OPTION 1 Such a decision I made first. For codewars I replaced findLastIndex with a loop for.
// Because findLastIndex is quite new and is not accepted on codewars. There are also other ways of
// solving this problem but not suitable for large numbers.

function nextBigger(n) {
  let nArr = `${n}`.split('');
  let indexNum = nArr.findLastIndex((v, i) => v < nArr[i + 1]);

  if (indexNum == -1) return -1;

  let indexForSwap = nArr.findLastIndex(v => v > nArr[indexNum]);

  [nArr[indexNum], nArr[indexForSwap]] = [nArr[indexForSwap], nArr[indexNum]];

  return +((nArr.slice(0, indexNum + 1).join('') + nArr.slice(indexNum + 1).sort().join('')));
}

//OPTION 2 for codewars
/*
function nextBigger(n) {
  let nArr = `${n}`.split('');

  let indexNum, indexForSwap;

  for (let i = nArr.length - 1; i >= 0; i--) {
    if (nArr[i] < nArr[i + 1]) {
      indexNum = i;
      break;
    }
  }

  if (indexNum == undefined) return -1;

  for (let i = nArr.length - 1; i >= 0; i--) {
    if (nArr[i] > nArr[indexNum]) {
      indexForSwap = i;
      break;
    }
  }

  [nArr[indexNum], nArr[indexForSwap]] = [nArr[indexForSwap], nArr[indexNum]];

  return +(nArr.slice(0, indexNum + 1).join('') + nArr.slice(indexNum + 1).sort().join(''));
}

*/


console.log(nextBigger(12)); //21
console.log(nextBigger(513)); //531
console.log(nextBigger(2017)); //2071
console.log(nextBigger(414)); //441
console.log(nextBigger(144)); //414
console.log(nextBigger(9)); //-1
console.log(nextBigger(111)); //-1
console.log(nextBigger(531)); //-1
console.log(nextBigger(1712938992)); //1712939289
console.log(nextBigger(9939473972)); //9939477239
console.log(nextBigger(4888765544321110)); //5011123444567888
console.log(nextBigger(5996553222211100)); //6001112222355599
