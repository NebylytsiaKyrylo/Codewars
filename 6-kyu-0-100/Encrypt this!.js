/*
https://www.codewars.com/kata/5848565e273af816fb000449

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this!
kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptThis = text =>
  text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (a, b, c, d) => a.charCodeAt() + d + c + b);

//OPTION 2
// const encryptThis = text =>
//   text
//     .split(' ')
//     .map(v => v.replace(/(^\w)(\w)(\w+)?(\w$)/, '$1$4$3$2').replace(/\w/, x => x.charCodeAt()))
//     .join(' ');

//OPTION 3
// const encryptThis = text =>
//   text
//     .split(' ')
//     .reduce((res, cur) => {
//       if (cur.length == 1) {
//         return res.concat(cur.charCodeAt());
//       } else {
//         let encrypt = cur.split('');
//         encrypt[0] = cur[0].charCodeAt();
//         encrypt[1] = cur[cur.length - 1];
//         encrypt[cur.length - 1] = cur[1];
//         return res.concat(encrypt.join(''));
//       }
//     }, [])
//     .join(' ');

console.log(encryptThis('A'));
console.log(encryptThis('Hello'));
console.log(encryptThis('A wise old owl lived in an oak')); //65 119esi 111dl 111lw 108dvei 105n 97n 111ka
