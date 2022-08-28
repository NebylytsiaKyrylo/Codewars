/*
https://www.codewars.com/kata/53f0f358b9cb376eca001079

Create a class Ball. Ball objects should accept one argument
for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate
with a "ball type" of "regular."this.ballType = ballType;

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

function Ball(ballType = 'regular') {
  this.ballType = ballType;
}

//OPTION 2
/*
class Ball {
  constructor (ballType = 'regular') {
    this.ballType = ballType;
  }
}
*/

let ball1 = new Ball();
let ball2 = new Ball('super');

console.log(ball1);
console.log(ball2);
