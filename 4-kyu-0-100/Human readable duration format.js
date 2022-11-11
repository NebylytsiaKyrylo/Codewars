/*
https://www.codewars.com/kata/52742f58faf5485cae000b9a

Your task in order to complete this Kata is to write a function which
formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just
returns "now". Otherwise, the duration is expressed as a combination of years, days,
hours, minutes and seconds.

It is much easier to understand with an example:

- For seconds = 62, your function should return "1 minute and 2 seconds"
- For seconds = 3662, your function should return "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc.
In general, a positive integer and one of the valid units of time, separated by a space.
The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component,
which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one.
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units
like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute
and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should
not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration
specified by of a component must not be greater than any valid more significant unit of time.
*/

// Solution 2
function formatDuration(seconds) {
  if (!seconds) return 'now';

  const data = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };

  const result = [];

  for (const key in data) {
    if (seconds >= data[key]) {
      let num = Math.floor(seconds / data[key]);
      result.push(`${num} ${num > 1 ? key + 's' : key}`);
    }
    seconds = seconds % data[key];
  }

  return result.join(', ').replace(/(, )(\d+\s?\w+$)/, ' and $2');
}

// Solution 1
/*
function formatDuration(seconds) {
  if (!seconds) return 'now';

  const year = Math.floor(seconds / 31536000),
    day = Math.floor((seconds - year * 31536000) / 86400),
    hour = Math.floor((seconds - year * 31536000 - day * 86400) / 3600),
    min = Math.floor((seconds - year * 31536000 - day * 86400 - hour * 3600) / 60),
    sec = seconds - year * 31536000 - day * 86400 - hour * 3600 - min * 60;

  const years = year ? `${year} year${year == 1 ? '' : 's'}` : year,
    days = day ? `${day} day${day > 1 ? 's' : ''}` : day,
    hours = hour ? `${hour} hour${hour > 1 ? 's' : ''}` : hour,
    mins = min ? `${min} minute${min > 1 ? 's' : ''}` : min,
    secs = sec ? `${sec} second${sec > 1 ? 's' : ''}` : sec;

  return [years, days, hours, mins, secs]
    .reduce((acc, cur) => cur ? acc.concat(cur) : acc, [])
    .join(', ')
    .replace(/(, )(\d+\s?\w+$)/, ' and $2');
}
*/

console.log(formatDuration(0)); // now
console.log(formatDuration(1)); // 1 second
console.log(formatDuration(62)); // 1 minute and 2 seconds
console.log(formatDuration(120)); // 2 minute
console.log(formatDuration(122)); // 2 minute and 2 seconds
console.log(formatDuration(3600)); // 1 hour
console.log(formatDuration(3662)); // 1 hour, 1 minute and 2 secons
console.log(formatDuration(7200)); // 2 hours
console.log(formatDuration(7201)); // 2 hours and 1 second
console.log(formatDuration(7320)); // 2 hours and 2 minutes
console.log(formatDuration(86400)); // 1 day
console.log(formatDuration(86460)); // 1 day and 1 minute
console.log(formatDuration(172920)); // 2 days and 2 minutes
console.log(formatDuration(31536000)); // 1 year
console.log(formatDuration(63956701)); // 2 years, 10 days, 5 hours, 45 minutes and 1 second
