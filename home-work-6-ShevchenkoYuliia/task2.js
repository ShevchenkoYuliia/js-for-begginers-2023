/**
1. Створіть новий об'єкт car;
2. Додайте властивість model з будь-яким значенням;
3. Додайте властивість speed з будь-яким значенням;
4. Додати метод run(), який виводить повідомлення: "model їде зі швидкістю
speed";
5. Додайте метод stop(), який виводить повідомлення: "model зупинилася";
Реалізуйте 3 версії завдання, використовуючи наступні синтаксиси створення
об'єктів: Стандартний,  Масивоподібний та Спрощений.
 */
"use strict";
var standart = function(){
    var car = Object()
    car.model = "Porshe Cayenne";
    car.speed = 90;
    car.run = function(){
        console.log(car.model + " їде зі швидкістю " + car.speed + " км/год");
    };
    car.stop = function(){
        console.log(car.model + " зупинилася");
    };

    car.run();
    car.stop();
    console.log();
}

var array = function(){
    var car = {};
    car["model"] = "Audi Q7";
    car["speed"] = 130;
    car["run"] = function(){
        console.log(car["model"] + " їде зі швидкістю " + car["speed"] + " км/год");
    };
    car["stop"] = function(){
        console.log(car["model"] + " зупинилася");
    };


    car["run"]();
    car["stop"]();
    console.log();
}

var simplified = function(){
    var car = {
        model : "Hyundai Tucson",
        speed : 95,
        run: function(){ 
            console.log(car.model + " їде зі швидкістю " + car.speed + " км/год");
        },
        stop: function(){
            console.log(car.model + " зупинилася");
        }
    };

    car.run();
    car.stop();
    console.log();
}

console.log("Стандартний синтаксис")
standart()
console.log("Масивоподібний синтаксис")
array()
console.log("Спрощений синтаксис")
simplified()
