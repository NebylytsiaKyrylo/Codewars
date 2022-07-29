/*
https://www.codewars.com/kata/57a429e253ba3381850000fb

DESCRIPTION:
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

const bmi = (weight, height) => {
  let bmiVariable = weight / Math.pow(height, 2);

  if (bmiVariable <= 18.5) return 'Underweight';
  if (bmiVariable > 18.5 && bmiVariable <= 25) return 'Normal';
  if (bmiVariable > 25 && bmiVariable <= 30) return 'Overweight';

  return 'Obese';
};

/*
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
*/
