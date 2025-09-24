/**
cтворіть тип об'єктів MP3 плеєра, в якому є приватна властивість гучність звуку,
для доступу до цієї властивості реалізуйте:
1. Методи геттер та сеттер;
2. Єдиний метод геттер-сетер.
Гучність може бути в діапазоні від 0 до 100.
 */
"use strict"
function MP3Player() {
    var volume = 50;

    this.getVolume = function () {
        return volume;
    };

    this.setVolume = function (newVolume) {
        if (newVolume >= 0 && newVolume <= 100) {
            volume = newVolume;
        } else {
            console.log("Невірне значення гучності. Гучність повинна бути в діапазоні від 0 до 100.");
        }
    };

    this.volumeControl = function (newVolume) {
        if (newVolume === undefined) {
          
            return volume;
        } else {
            if (newVolume >= 0 && newVolume <= 100) {
                volume = newVolume;
            } else {
                console.log("Невірне значення гучності. Гучність повинна бути в діапазоні від 0 до 100.");
            }
        }
    };
}

var myMP3Player = new MP3Player();

console.log(myMP3Player.getVolume()); 
myMP3Player.setVolume(45);
console.log(myMP3Player.getVolume()); 

console.log(myMP3Player.volumeControl()); 
myMP3Player.volumeControl(90);
console.log(myMP3Player.volumeControl());
