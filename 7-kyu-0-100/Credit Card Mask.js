/*
https://www.codewars.com/kata/5412509bd436bd33920011bc

Usually when you buy something, you're asked whether your credit card number,
phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder, you don't want that
shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples:

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

"What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!" --> "####################################man!"
*/

const maskify = cc => cc.slice(0, -4).replace(/\w/g, '#') + cc.slice(-4);


console.log(maskify('4556364607935616'));
console.log(maskify('64607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));
console.log(maskify('ndo'));
console.log(maskify(''));
console.log(maskify('Skippy'));
console.log(maskify('Nananananananananananananananana Batman!'));
