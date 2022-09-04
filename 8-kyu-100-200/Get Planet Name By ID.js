/*
https://www.codewars.com/kata/515e188a311df01cba000003

The function is not returning the correct values. Can you figure out why?

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
    case 2:
      name = 'Venus'
    case 3:
      name = 'Earth'
    case 4:
      name = 'Mars'
    case 5:
      name = 'Jupiter'
    case 6:
      name = 'Saturn'
    case 7:
      name = 'Uranus'
    case 8:
      name = 'Neptune'
  }

  return name;
}

Example (Input --> Output ):

3 --> "Earth"
*/

//OPTION 1 I would have done differently
const earths = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const getPlanetName = id => earths[id - 1];

//OPTION 2 fix the original function
/*
function getPlanetName(id) {
  switch (id) {
    case 1: return 'Mercury';
    case 2: return 'Venus';
    case 3: return 'Earth';
    case 4: return 'Mars';
    case 5: return 'Jupiter';
    case 6: return 'Saturn';
    case 7: return 'Uranus';
    case 8: return 'Neptune';
  }
}
*/

console.log(getPlanetName(3)); //Earth
console.log(getPlanetName(5)); //Jupiter
