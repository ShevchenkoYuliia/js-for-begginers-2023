/**
Напишіть функцію digitN(k, n), яка повертає n-у цифру цілого додатнього числа k
(цифри у числі нумеруються зправа на ліво).
Якщо кількість цифр в числі k менше n, то функція повертає -1.
 */
function digitN(k, n){
    var arr = new Array();
    var a;
    for(var i = 0; k > 0; i++){
            a = k % 10;
            arr[i] = a;
            k = (k - a) / 10;
        } 
    if(arr.length >= n){
        return arr[n-1];
    }
    else return -1;    
}

console.log(digitN(12398667, 4));
console.log(digitN(123, 4));