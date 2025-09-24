/* Напишіть функцію, яка приймає як параметр об'єкт salaries із зарплатами
  та повертає значення максимальної із зарплат. Код має працювати з різною кількістю зарплат в об'єкті.
*/
"use strict";
var salaries1 = {
    John: 100,
    Bill: 300,
    Mike: 250,
};

var salaries2 = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50,
};

function maxSalary (salaries){
  var num = 0;
  var max = 0;
  for(var key in salaries){
    if(salaries.hasOwnProperty(key) && typeof salaries[key] === "number"){
      if(max<salaries[key] ){
        max = salaries[key];
      }
      num++;
    }
  }
  if(num === 0){
    return 0;
  }
  return max;
}
console.log(maxSalary(salaries1));
console.log(maxSalary(salaries2));