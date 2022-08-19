/*
https://www.codewars.com/kata/57a049e253ba33ac5e000212

Your task is to write function factorial.
Suppose that n can be less than zero.
*/

const factorial = n => n < 0 ? 1 : n ? n * factorial(n - 1) : 1;

//OPTION 2
/*
const factorial = n => {
  if (n < 0) return 1;

  let fact = 2;

  while (n > 2) {
    fact *= n--;
  }

  return fact;
};
*/

console.log(factorial(5)); //120
console.log(factorial(15)); //1307674368000
