/**
У файлі [task6.js](task6.js) створіть функцію isEmpty(obj),
яка повертає true, якщо в об'єкті немає властивостей
та false – якщо хоч одна властивість є.
 */
"use strict";
var user = {
    name: "Cris",
};
function ifEmpty(obj){
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
    return true;
}
console.log(ifEmpty(user));
delete user.name;
console.log(ifEmpty(user));