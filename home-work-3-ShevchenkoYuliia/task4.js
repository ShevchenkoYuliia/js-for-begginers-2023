/**
Дано чотири цілих числа, одне з яких відрізняється від трьох інших, 
рівних між собою. Визначте порядковий номер числа, відмінного від інших.
 */
function imposter(num1, num2, num3, num4){
    if(num2 == num3 && num3 == num4){
        console.log("1")
    }
    else if(num1 == num3 && num3 == num4){
        console.log("2")
    }
    else if (num1 == num2 && num2 == num4){
        console.log("3")
    }
    else if (num1 == num2 && num2 == num3){
        console.log("4")
    }
}
imposter(1,2,2,2);
imposter(3,3,3,4);
imposter(55,55,1,55);
imposter(0,1,0,0);
