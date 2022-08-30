/*
https://www.codewars.com/kata/51c8e37cee245da6b40000bd

Complete the solution so that it strips all text that follows any of a set of comment
markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The output expected would be:
apples, pears
grapes
bananas

The code would be called like so:
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
  let regex = new RegExp(' ?' + `[${markers.join('')}]` + '[ \\w]+', 'g');
  return input.replace(regex, '');
}

//OPTION 2
// function solution(input, markers) {
//   let markersRegex = markers.map(m => `\\${m}`).join('|');
//   let regex = new RegExp(' ?' + `${markersRegex})` + '[ \\w]+', 'g');
//   return input.replace(regex, '');
// }

console.log(solution('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']));
//'apples, plums\npears\noranges'

console.log(solution('Q @b\nu\ne -e f g', ['@', '-'])); //'Q\nu\ne'
