/*
https://www.codewars.com/kata/559ac78160f0be07c200005a

DESCRIPTION:
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

const nameShuffler = str => str.replace(/(.*)(\s)(.*)/, '$3$2$1');
