/**
Напишіть функцію calc(a, b, op), яка виконує над числами a і b
одну із арифметичних операцій та повертає її результат.
Вид операції визначається цілим числом op:
1 – віднімання,
2 – добуток,
3 – ділення,
інші значення – додавання.
 */
var a = 10;
var b = 2;

console.log(a + " - " + b + " = " +  calc(a, b, 1));
console.log(a + " * " + b + " = " +  calc(a, b, 2));
console.log(a + " / " + b + " = " +  calc(a, b, 3));
console.log(a + " + " + b + " = " + calc(a, b, 9));

function calc(a, b, op){
    var res;
    switch(op){
        case 1:
            res = a - b;
        break;
        case 2:
            res = a * b;
        break;
        case 3:
            res = a / b;
        break;
        default:
            res = a + b;
        break;
    }
    return res;
}