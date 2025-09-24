/**
Задані два цілих числа a і b (a < b). 
Знайти суму усіх цілих чисел від a до b включно.
 */
function sumOfAllIntegers(a, b){
    var sum = 0;
    for(var i = a; i <= b; i++){
        sum += i;
    }
    return sum;
}
console.log("Cума усіх цілих чисел від a до b =", sumOfAllIntegers(1, 18));