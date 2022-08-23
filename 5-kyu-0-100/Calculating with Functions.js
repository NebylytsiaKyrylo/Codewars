/*
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

DESCRIPTION:
This time we want to write calculations using functions and get the results.
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations:
plus, minus, times, dividedBy

Each calculation consist of exactly one operation and two numbers

The most outer function represents the left operand, the most inner
function represents the right operand

Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

// given at the beginning
/*
function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}
*/

//SOLUTION
//Check function or number
const check = (num, func) => !func ? num : func(num);

//Numbers
const zero = func => check(0, func);
const one = func => check(1, func);
const two = func => check(2, func);
const three = func => check(3, func);
const four = func => check(4, func);
const five = func => check(5, func);
const six = func => check(6, func);
const seven = func => check(7, func);
const eight = func => check(8, func);
const nine = func => check(9, func);

//Expression
const plus = a => b => b + a;
const minus = a => b => b - a;
const times = a => b => b * a;
const dividedBy = a => b => Math.floor(b / a);


console.log(seven(times(five()))); //35
console.log(four(plus(nine()))); //13
console.log(eight(minus(three()))); //5
console.log(six(dividedBy(two()))); //3
console.log(eight(dividedBy(three()))); //2 (not 2.666)


//OPTION 2
/*
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return Math.floor(a / b); }; };
*/
