/*
https://www.codewars.com/kata/52685f7382004e774f0001f7

Write a function, which takes a non-negative integer (seconds) as input
and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600),
      min = Math.floor((seconds - hours * 3600) / 60),
      sec = seconds - hours * 3600 - min * 60;

  const plusZero = time => time > 9 ? time : '0' + time;

  return `${plusZero(hours)}:${plusZero(min)}:${plusZero(sec)}`;
}


console.log(humanReadable(0)); //'00:00:00'
console.log(humanReadable(59)); //'00:00:59'
console.log(humanReadable(60)); //'00:01:00'
console.log(humanReadable(90)); //'00:01:30'
console.log(humanReadable(3599)); //'00:59:59'
console.log(humanReadable(3600)); //'01:00:00'
console.log(humanReadable(45296)); //'12:34:56'
console.log(humanReadable(86399)); //'23:59:59'
console.log(humanReadable(86400)); //'24:00:00'
console.log(humanReadable(359999)); //'99:59:59'
