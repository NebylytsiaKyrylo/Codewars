/*
https://www.codewars.com/kata/567bf4f7ee34510f69000032

DESCRIPTION:
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function () {
  return /^[0-9]$/g.test(this);
};
