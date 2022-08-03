/*
https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"

Notes
Other than parentheses only letters and spaces can occur in the string.
Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
*/

function removeParentheses(s) {
  let stack = [];
  let result = '';

  for (const c of s) {
    if (c == '(') stack.push(c);
    if (stack == 0) result += c;
    if (c == ')') stack.pop();
  }

  return result;
}



console.log(removeParentheses('!(1234)!')); // '!!'
console.log(removeParentheses('a(b(c))')); // 'a'
console.log(removeParentheses('example(unwanted thing)example')); // 'exampleexample'
console.log(removeParentheses('example (unwanted thing) example')); // 'example  example'
console.log(removeParentheses('a (bc d)e')); // 'a e'
console.log(removeParentheses('hello example (words(more words) here) something')); // 'hello example  something'
console.log(removeParentheses('!(first group) (second group) (third group)!')); // '!  !'


//OPTION 1
/*
function removeParentheses(s) {
  let stack = [];
  let result = '';

  for (const i in s) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      stack.pop();
    } else {
      if (stack.length === 0) {
        result += s[i];
      }
    }
  }

  return result;
}
*/


// OPTION 2
/*
function removeParentheses(s) {
  let stack = [];
  let result = '';

  for (const i in s) {
    s[i] === '(' ? stack.push(s[i])
      : s[i] === ')' ? stack.pop()
      : stack.length === 0 ? (result += s[i]) : result;
  }

  return result;
}
*/

//OPTION 3
/*
function removeParentheses(s) {
  let stack = [];

  return s
    .split('')
    .reduce((res, cur) =>  cur == '(' ? (stack.push(cur), res) : cur == ')' ? (stack.pop(), res) : stack.length == 0 ? res += cur : res,'');
}
*/
