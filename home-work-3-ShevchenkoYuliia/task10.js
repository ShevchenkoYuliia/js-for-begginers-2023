/**
Напишіть код, який:
1. За допомогою prompt отримує значення і зберігає їх до масиву.
2. Закінчує введення, як тільки користувач вводить пустий рядок, не число чи нажимає "Скасувати".
3. Виводить суму усіх значень масиву.
 */
var arr = [];
var num;
var sum = 0;
while(1){
    num = +prompt("Enter number");
    if(num == null){
        break;
    }
    else {
        arr.push(num);
    }
}

console.log("sum =",sumOfAllArraysValues(arr));

function sumOfAllArraysValues(arr){
    for(var i = 0; i < arr.length; i++ ){
        sum += arr[i];
    }
    return sum;
}