/**
Задано ціле число n>0.
Знайти факторіал числа n! (n! = 1 * 2 * … * n).
 */
function factorial(num){
    var res = 1;
    for(var i = 1; i <= n; i++){
        res *=i;
    }
    return res;
}
var n = 8;
console.log(n + "! = " + factorial(n));