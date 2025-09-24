var x = 1;
var y = 2;

var res1 = "" + x + y; // Допишіть код, необхідно використовувати змінні x та y
console.log("res1 = " + res1); // "12"
console.log("typeof res1 = " + typeof res1); // "string"

var res2 = Boolean(x)+ "" + y; // Допишіть код, необхідно використовувати змінні x та y
console.log("res2 = " + res2); // "true2"
console.log("typeof res2 = " + typeof res2); // "string"

var res3 = y > x; // Допишіть код, необхідно використовувати змінні x та y
console.log("res3 = " + res3); // true
console.log("typeof res3 = " + typeof res3); // "boolean"

var res4 = String(y>x)*y; // Допишіть код, необхідно використовувати змінні x та y
console.log("res4 = " + res4); // NaN
console.log("typeof res4 = " + typeof res4); // "number"