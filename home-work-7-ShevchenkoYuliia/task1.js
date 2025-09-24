/*
Створіть об'єкт calculator, який буде мати методи:
1. read() запитує два значення з допомогою prompt() і зберігає в властивостях об'єкта;
2. sum() повертає суму цих двох значень;
3. mul() повертає добуток цих двох значень.
*/
"use strict";
var calculator = {
   a: 1,
   b: 2,
   read: function(){
      var num1 = +prompt("Enter number a:");
      var num2 = +prompt("Enter number b:");
      this.a = num1;
      this.b = num2;
   },
   sum: function(){
      return this.a + this.b;
   },
   mul:function(){
      return this.a * this.b;
   }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
