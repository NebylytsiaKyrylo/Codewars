/*
https://www.codewars.com/kata/587731fda577b3d1b0001196

DESCRIPTION:

Write simple .camelCase method (camel_case function in PHP, CamelCase in C#
or camelCase in Java) for strings. All words must have their first
letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase = function () {
  return this.replace(/^\w|\s\w/g, x => x.toUpperCase()).replace(/\s/g, '');
};

//OPTION 2
/*
String.prototype.camelCase = function () {
  return this.replace(/(?:^|\s)(\w)/g, (_,x) => x.toUpperCase());
};
*/

console.log('camel case method'.camelCase()); //CamelCaseMethod
