/**
Напишіть функцію pow(x, n), яка повертає  x  у ступені  n.
Іншими словами, множить x на себе n разів та повертає результат
(не можна використовувати оператор ** або Math.pow)
 */
var x = 2;
var n = 5;
console.log("Число " + x + " в " + n +" степені = "+ pow(x,n));


function pow(x, n){
    var power = 1;
    for(var i = 1; i <= n; i++){
        power *= x;
    }
    return power;
}