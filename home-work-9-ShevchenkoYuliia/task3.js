/*
Створіть тип об'єктів Суматор, з наступним функціоналом:
1. Приватна властивість __firstNumber;
2. Приватна властивість __secondNumber;
3. Публічна властивість result; 
4. Приватний метод __calc(), який записує в result суму
властивостей __firstNumber та __secondNumber; 
5. Єдині методи геттер-сеттер для властивостей __firstNumber і __secondNumber,
під час роботи методів у якості сеттерів, повинна відбуватися валідація
(встановлювати можна лише значення типу Number), якщо валідація
відбулась успішно, повинен викликатись метод __calc().
Виходить, що при успішній установці чи __firstNumber
чи __secondNumber, відбувається перерахунок result. 
*/
"use strict"
function Summator() {
  var __firstNumber = 0;
  var __secondNumber = 0;
  var result = 0;

  // Private method to calculate the sum and update the result property
  const __calc = function () {
    result = __firstNumber + __secondNumber;
  };

  this.firstNumber = function (value) {
    if (typeof value !== "number" ) {
      console.log("Invalid value");
      
    } else {
      __firstNumber = value;
      __calc();
    }
    return __firstNumber;
  };

  this.secondNumber = function (value) {
    if (typeof value !== "number") {
      console.log("Invalid value");
      
    } else {
      __secondNumber = value;
      __calc();
    }
    return __secondNumber;
  };
  this.result = function () {
    return result;
  };

}

const summator = new Summator();
summator.firstNumber(3);
console.log('First Number:', summator.firstNumber());
console.log('Result:', summator.result()); 

summator.secondNumber(10);
console.log('Second Number:', summator.secondNumber()); 
console.log('Result:', summator.result()); 
