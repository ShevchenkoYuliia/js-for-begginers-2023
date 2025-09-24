/**
Задані цілі числа a і b (a < b). 
Виведіть усі цілі числа від a до b включно, при цьому
a виводится один раз, число **а+1** - два рази і т.д.
 */
function f(a, b){
    var sum = 0;
    var count = 0;
    for(var i = a; i <= b; i++){
        for(var num = 0; num <= count; num++){
            process.stdout.write(i + " ");
        }  
        console.log(" ");
        count++;
    }
}
f(2, 8);