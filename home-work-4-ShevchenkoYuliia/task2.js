/**
Напишіть функцію min(), яка повертає мінімальне число серед усіх переданих аргументів.
Функція має працювати при будь якій кількості вхідних аргументів.
 */
console.log(min(26,45,7,6,11,8));

function min(){
    var minimum = arguments[0];
    for(var i = 0; i <= arguments.length; i++){
        if(arguments[i] > minimum){
            minimum = minimum;
        } 
        else if(arguments[i] < minimum){
            minimum = arguments[i];
        }
    }
    return minimum;
}