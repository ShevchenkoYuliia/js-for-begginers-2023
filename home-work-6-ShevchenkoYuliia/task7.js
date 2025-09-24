/**
Напишіть код, який виведе середнє значення всіх зарплат в об'єкті salaries.
Код має працювати з різною кількістю зарплат в об'єкті.
Можна використовувати об'єкти нижче для тестування.
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
var average = function(salaries){
  var num = 0;
  var sum = 0;
  for(var key in salaries){
    if(salaries.hasOwnProperty(key) && typeof salaries[key] === "number"){
      sum = sum + salaries[key];
      num++;
    }
  }
  if(num === 0){
    return 0;
  }
  return sum/num;
}
var average1 = average(salaries1);
console.log()
var average2 = average(salaries2);
console.log("Cереднє значення всіх зарплат: " + average1)
console.log("Cереднє значення всіх зарплат: " + average2)