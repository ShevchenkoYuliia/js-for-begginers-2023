/**
Напишіть код для "безпечного" обчислення периметра та площі прямокутника.
Сторонами прямокутника може лише число, значення якого, суворо більше 0.
(використати механізм замикання)
 */
function squareAndPerimeter(){
    return function(width, height){
    if(width > 0 && height > 0){
     //    return function(){
          console.log("Square = " +  width * height); 
          console.log("Perimeter = " + 2 * (width + height));
    }
    else {
        console.log("ERROR");
    }
};
}
var res = squareAndPerimeter();
res(2, 33);