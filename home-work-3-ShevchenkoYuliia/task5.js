/**
Дано ціле число k. 
Виведіть рядок-опис оцінки, що відповідає числу k
1 – "погано",
2 – "незадовільно",
3 – "задовільно",
4 – "добре",
5 – "відмінно".
Якщо k не лежить у діапазоні 1–5, вивести рядок "помилка".
 */
function type(k){
    switch(k){
        case 1: 
            console.log("погано");
            break;
        case 2: 
            console.log("незадовільно");
            break;
        case 3: 
            console.log("задовільно");
            break;
        case 4: 
            console.log("добре");
            break;
        case 5: 
            console.log("відмінно");
            break;
        default: 
            console.log("помилка");
            break;
    }
}

type(1);
type(2);
type(3);
type(4);
type(5);
type(10);