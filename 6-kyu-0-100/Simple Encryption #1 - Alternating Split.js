/*
https://www.codewars.com/kata/57814d79a56c88e3e0000786

Implement a pseudo-encryption algorithm which given a string S and
an integer N concatenates all the odd-indexed characters of S with
all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a
decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive,
return the first argument without changes.
*/

// ENCRYPT FN
function encrypt(text, n) {
  if (!text || n <= 0) return text;

  let enText = [...text];

  while (n--) {
    enText = enText.filter((_, i) => i % 2).concat(enText.filter((_, i) => !(i % 2)));
  }

  return enText.join('');
}

console.log(encrypt(null, 0)); //null
console.log(encrypt('1234567', 1)); //2461357
console.log(encrypt('012345', 2)); //304152
console.log(encrypt('012345', 3)); //012345

//DECRYPTED FN
function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;

  let decryptedText = new Array (encryptedText.length);

  while (n--) {
    let index = 0;

    for (let i = 1; i < decryptedText.length; i += 2) {
      decryptedText[i] = encryptedText[index++];
    }

    for (let i = 0; i < decryptedText.length; i += 2) {
      decryptedText[i] = encryptedText[index++];
    }

    encryptedText = decryptedText.join('');
  }

  return decryptedText.join('');
}

console.log(decrypt('s eT ashi tist!', 2)); // This is a text
