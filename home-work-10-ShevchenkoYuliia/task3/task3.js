/**
Напишіть код в який використовує sumSliceArray(arr, first, second)
з попереднього завдання, але перед використанням перевіряє 
всі параметри на правильність.
Таким чином, ніколи не повинні генеруватися винятки, які є всередині цієї функції.
 */
try {
    var sumArray = (function() {
    var myArray = [];
    var first;
    var second
    return{
        setArray: function(arr){
            if (!Array.isArray(arr)) {
                console.log("First argument must be an array");
                process.exit(1);
             }
              myArray = arr.slice();
        },
        setFirstSecond: function(number, number2){
            if (typeof number !== "number" || typeof number2 !== "number") {
                console.log("Both arguments must be numbers");
                process.exit(1);
            }
            if (number >= arr.length || number2 >= arr.length) {
                console.log("One or both indexes exceed array length");
                process.exit(1);
            }
            first = number;
            second = number2;
        },
        sumSliceArray: function(arr, first, second){
            return sumSliceArray(arr, first,second);
        },
        print: function(){
            console.log(myArray);
            console.log(first);
            console.log(second);
        },
    }
}());
} catch (error) {
    console.error(error.message);
}
var arr = [1,2,3,4,5];
var a = "d";
var b = 2;
sumArray.setArray(arr);
sumArray.setFirstSecond(a,b);
sumArray.print();
console.log(sumArray.sumSliceArray(arr, a , b));