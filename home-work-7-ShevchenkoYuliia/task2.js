// Напишіть функцію створення об'єктів, які описують MP3 плеєр (об'єкт має мати мінімум 3 властивості і 2 методи). Створіть деікілька екземплярів MP3-плеєрів.
"use strict";
// task2.js

// Функція для створення об'єкта MP3-плеєра
function createMP3Player(model, storageCapacity, volume) {
    return {
        model: model,
        storageСapacity: storageCapacity,
        isPlaying: false,
        volume: volume,

        play: function () {
            this.isPlaying = true;
            console.log("Плеєр "+ this.model + " почав відтворення музики.\n");
        },
        stop: function(){
            this.isPlaying = false;
            console.log("Плеєр "+ this.model + " зупинив відтворення музики.\n");
        },
        makeLouder: function (num) {
            var newVolume;
            newVolume = this.volume + num;
            if (newVolume >= 0 && newVolume <= 100) {
                this.volume = newVolume;
                console.log("Гучність плеєра " + this.model + " = " +this.volume + "%\n");
            } else {
                console.log("Рівень гучності повинен бути в межах від 0 до 100.");
            }
        },
        makeQuiter: function (num) {
            var newVolume;
            newVolume = this.volume - num;
            if (newVolume >= 0 && newVolume <= 100) {
                this.volume = newVolume;
                console.log("Гучність плеєра " + this.model + " = " +this.volume + "%\n");
            } else {
                console.log("Рівень гучності повинен бути в межах від 0 до 100.");
            }
        }, 
        display: function(){
            console.log("Model: " + this.model);
            console.log("Memory capacity: " + this.storageСapacity + " GB");
            console.log("Volume: " + this.volume);
            console.log("Current song: " + this.currentSong);
            console.log("isPlaying: " + this.isPlaying);
            console.log();
        }
    };
}
const player1 = createMP3Player("Sony Walkman", "16", 50);
const player2 = createMP3Player("Apple iPod", "32", 40);

  player1.display();
  player1.makeLouder(8);
  player1.display();
  player1.play();
  player1.display();
  player2.display();
  player2.makeQuiter(8);
  player2.display();
  player2.play();
  player2.display();
  player2.stop();
  player2.display();
