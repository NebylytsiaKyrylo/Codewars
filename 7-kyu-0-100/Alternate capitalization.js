/*
https://www.codewars.com/kata/59cfc000aeb2844d16000075

DESCRIPTION:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s) {
  return [
    s.split('').map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v)).join(''),
    s.split('').map((v, i) => (i % 2 !== 0 ? v.toUpperCase() : v)).join(''),
  ];
}


/*
const capitalize = s =>
  s.split('').reduce((acc, v, i) => i % 2 === 0 ? (acc[0] += v.toUpperCase(), acc[1] += v, acc) : (acc[0] += v, acc[1] += v.toUpperCase(), acc), ['', '']);
*/

/*
function capitalize(s){
    return s.split('').reduce((acc, v, i) => {
      if (i % 2 === 0) {
        acc[0] += v.toUpperCase()
        acc[1] += v
        return acc
      }
      acc[0] += v
      acc[1] += v.toUpperCase()
      return acc
    }, ['', ''])
};
*/
