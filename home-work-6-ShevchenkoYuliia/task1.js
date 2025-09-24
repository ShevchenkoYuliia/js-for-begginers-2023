/**
1. Створіть новий об'єкт user;
2. Додайте властивість name із значенням Cris;
3. Додайте властивість surname зі значенням Simons;
4. Змініть значення name на Brain;
5. Видаліть властивість name з об'єкта.
 */
"use strict";
var user = {
    name: "Cris",
    surname: "Simons",
    display: function(){
        console.log(user.name);
        console.log(user.surname);
        console.log();
    }
};
user.display();
user.name = "Brain";
user.display();
delete user.name;
user.display();