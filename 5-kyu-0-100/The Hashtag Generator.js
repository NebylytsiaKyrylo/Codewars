/*
https://www.codewars.com/kata/52449b062fb80683ec000024

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples:

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag(str) {
  let hashtag = '#' + str.replace(/(^\w|\s\w)/g, x => x.toUpperCase()).replace(/\s/g, '');
  return hashtag.length <= 140 && hashtag.length > 1 ? hashtag : false;
}

console.log(generateHashtag(' Hello there thanks for trying my Kata'));
console.log(generateHashtag('    Hello     World   '));
console.log(generateHashtag(''));
console.log(generateHashtag('code'));
console.log(generateHashtag('Codewars is nice'));
console.log(generateHashtag('Do We have A Hashtag'));
