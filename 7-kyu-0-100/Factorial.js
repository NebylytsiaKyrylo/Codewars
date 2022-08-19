/*
https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

DESCRIPTION:
In mathematics, the factorial of a non-negative integer n, denoted by n!,
is the product of all positive integers less than or equal to n.
For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
*/

const factorial = n => {
  if (n < 0 || n > 12) throw new RangeError();
  if (n == 0) return 1;

  return n * factorial(n - 1);
};

//OPTION 2
/*
const factorial = n => {
  if (n < 0 || n > 12) throw new RangeError();
  if (n == 0) return 1;

  let fact = 2;

  while(n > 2) {
    fact *= n--;
  }

  return fact;
};
*/

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-1));
console.log(factorial(13));
