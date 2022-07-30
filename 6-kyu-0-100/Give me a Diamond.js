/*
https://www.codewars.com/kata/5503013e34137eeeaa001648

Jamie is a programmer, and James' girlfriend. She likes diamonds,
and wants a diamond string from James.
Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen,
using asterisk (*) characters. Trailing spaces should be removed, and every
line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative,
as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *

...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n) {
  if (n % 2 && n > 0) {
    let diam = '';
    let mid = Math.ceil(n / 2);

    for (let i = 1; i <= n; i++) {
      if (i <= mid) {
        diam += ' '.repeat(mid - i) + '*'.repeat(2 * i - 1) + '\n';
      } else {
        diam += ' '.repeat(i - mid) + '*'.repeat((n - i) * 2 + 1) + '\n';
      }
    }

    return diam;
  }

  return null;
}

console.log(diamond(1)); // '*\n'
console.log(diamond(3)); // ' *\n***\n *\n'
console.log(diamond(5)); // '  *\n ***\n*****\n ***\n  *\n'
console.log(diamond(2)); // null
console.log(diamond(-3)); // null
console.log(diamond(0)); // null
