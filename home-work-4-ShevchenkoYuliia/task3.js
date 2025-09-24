/**
Напишіть функцію sign(x), яка повертає для дійсного числа x наступні значення:
-1, якщо x < 0;
0, якщо x = 0;
1, якщо x > 0.
 */
var res = sign(9);
console.log(res);

function sign(x){
    if(x < 0){
      return -1;
    }
    else if(x == 0){
       return 0;
    }
    else if(x > 0){
        return 1;
    }
}
