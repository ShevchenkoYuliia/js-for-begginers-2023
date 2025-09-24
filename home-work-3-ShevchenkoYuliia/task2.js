/* 
Дано ціле число.
Якщо воно є додатнім, додайте до нього 1;
якщо від’ємним, то відніміть від нього 2;
якщо нульовим, замініть його на 10. 
Виведіть отримане число.
*/

function number(num){
    if(num > 0){  
        num += 1;
    }
    else if(num < 0){
        num -= 2;
    } 
    else if(num == 0){
        num = 10;
    }
    return num;
}
console.log("num = ", number(-6));
console.log("num = ", number(0));
console.log("num = ", number(44));