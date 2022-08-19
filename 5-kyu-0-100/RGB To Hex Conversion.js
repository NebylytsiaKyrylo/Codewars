/*
https://www.codewars.com/kata/513e08acc600c94f01000001

The rgb function is incomplete. Complete it so that passing in RGB decimal
values will result in a hexadecimal representation being returned.
Valid decimal values for RGB are 0 - 255. Any values that fall out
of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with
3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b) {
  const toHex = num => {
    num = num < 0 ? 0 : num > 255 ? 255 : num;
    let hex = num.toString(16).toUpperCase();

    return hex.length == 1 ? `0${hex}` : hex;
  };

  return toHex(r) + toHex(g) + toHex(b);
}

//OPTION 2
/*
const rgb = (r, g, b) =>
  [r, g, b]
    .reduce((hex, v) => hex + (0 + Math.max(0, Math.min(255, v)).toString(16)).slice(-2), '')
    .toUpperCase();
*/

console.log(rgb(255, 255, 255)); // FFFFFF
console.log(rgb(255, 255, 300)); // FFFFFF
console.log(rgb(0, 0, -20)); // 000000
console.log(rgb(0, 0, 0)); // 000000
console.log(rgb(148, 0, 211)); // 9400D3
console.log(rgb(173, 255, 47)); // ADFF2F
