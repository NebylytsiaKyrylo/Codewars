/*
https://www.codewars.com/kata/54a91a4883a7de5d7800009c

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.

If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString(s) {
  let str = (s.match(/[a-z0]+/) || []).join('');
  let newNum = +s.replace(/[a-z0]+/, '') + 1;
  let newStr = str + newNum;

  return newStr.length > s.length && /0/.test(str)
    ? newStr.replace('0', '')
    : newStr;
}

//OPTION 2
// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, num => num ? +num + 1 : 1);

//OPTION 3
/*
function incrementString(s) {
  let string = (s.match(/[a-z0]+/) || []).join('');
  let num = s.replace(/[a-z0]+/, '');

  if (/0/.test(string)) {
    if (`${+num + 1}`.length > num.length) return string.replace('0', '') + (+num + 1);
    if (`${+num + 1}`.length == num.length) return string + (+num + 1);
  }

  return string + (+num + 1);
}
*/

console.log(incrementString('foobar000')); //foobar001
console.log(incrementString('foo')); //foo1
console.log(incrementString('foobar001')); //foobar002
console.log(incrementString('foobar99')); //foobar100
console.log(incrementString('foobar099')); //foobar100
console.log(incrementString('foobar0000999')); //foobar0001000
console.log(incrementString('')); //'1'
console.log(incrementString('1')); //'2'
