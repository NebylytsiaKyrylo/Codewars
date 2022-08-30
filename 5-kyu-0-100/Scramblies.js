/*
https://www.codewars.com/kata/55c04b4cc56a697bb0000048

Complete the function scramble(str1, str2) that returns true if a portion
of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/


function scramble(str1, str2) {
  let quantity = [...str1].reduce((obj, char) => (obj[char] = (obj[char] || 0) + 1, obj), {});
  return [...str2].every(char => quantity[char]--);
}

//OPTION 2 and other options failed big data tests
/*
function scramble(str1, str2) {
  return [...str2].every(
    v => [...str1].filter(x => x == v).length >= [...str2].filter(x => x == v).length);
}
*/


console.log(scramble('rkqodlw', 'world')); //true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); //true
console.log(scramble('katas', 'steak')); //false
console.log(scramble('scriptjavx', 'javascript')); //false
console.log(scramble('scriptingjava', 'javascript')); //true
console.log(scramble('scriptsjava', 'javascripts')); //true
console.log(scramble('javscripts', 'javascript')); //false
console.log(scramble('jscripts', 'javascript')); //false
console.log(scramble('aabbcamaomsccdd', 'commas')); //true
console.log(scramble('commas', 'commas')); //true
console.log(scramble('sammoc', 'commas')); //true
