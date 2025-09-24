// Напишіть рекурсивну функцію digitSum(k), яка знаходить суму цифр цілого числа k без використання циклів.
function digitSum(k){
    if(k === 0){
        return 0;
    }
    else{
        var lastNumber = k % 10; 
        var rest = (k - lastNumber) / 10;
    }
    return lastNumber + digitSum(rest);
}
console.log("Sum = " + digitSum(455));