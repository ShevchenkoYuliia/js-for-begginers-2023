// Cтворіть тип об'єктів (функцію-конструктор) MP3-плеєрів (об'єкт має мати мінімум 3 властивості і 2 методи). Створіть деікілька екземплярів MP3-плеєрів.
"use strict";
function MP3Player( model, storageСapacity, volume) {
    this.model = model;
    this.storageСapacity = storageСapacity;
    this.playlist = [];
    this.currentSong = null;
    this.isPlaying = false;
    this.volume = volume;
}
  // Метод для додавання пісні до плейлисту
MP3Player.prototype.makeLouder = function (num) {
    var newVolume;
    newVolume = this.volume + num;
    if (newVolume >= 0 && newVolume <= 100) {
        this.volume = newVolume;
        console.log("Гучність плеєра " + this.model + " = " +this.volume + "%\n");
    } else {
        console.log("Рівень гучності повинен бути в межах від 0 до 100.");
    }
};
MP3Player.prototype.makeQuiter = function (num) {
    var newVolume;
    newVolume = this.volume+num;
    if (newVolume >= 0 && newVolume <= 100) {
        this.volume = newVolume;
        console.log("Гучність плеєра " + this.model + " = " +this.volume + "%\n");
    } else {
        console.log("Рівень гучності повинен бути в межах від 0 до 100.");
    }
}; 
MP3Player.prototype.play = function(){
    this.isPlaying = true;
    console.log("Плеєр "+ this.model + " почав відтворення музики.\n");
};
MP3Player.prototype.stop = function(){
    this.isPlaying = false;
    console.log("Плеєр "+ this.model + " зупинив відтворення музики.\n");
};
  // Метод для відтворення пісні
MP3Player.prototype.playSong = function (songTitle) {
    if (this.playlist.includes(songTitle)) {
        this.currentSong = songTitle;
        this.isPlaying = true;
        console.log("Відтворюється пісня:" + songTitle + "\n");
    } else {
        console.log("Пісню " + songTitle + " не знайдено в плейлисті.\n");
    }
};
MP3Player.prototype.addSong = function (songTitle) {
    this.playlist.push(songTitle);
    console.log("Пісню " + songTitle + " додано до плейлисту.\n");
};
MP3Player.prototype.display = function(){
    console.log("Model: " + this.model);
    console.log("Memory capacity: " + this.storageСapacity + " GB");
    console.log("Volume: " + this.volume);
    console.log("Current song: " + this.currentSong);
    console.log("isPlaying: " + this.isPlaying);
    console.log();
};
  // Приклад створення екземплярів MP3-плеєрів
  const player1 = new MP3Player("Samsung YP-Q2QB", 16, 50);
  const player2 = new MP3Player("Apple iPod", 32, 38);

  player1.display();
  player1.makeLouder(8);
  player1.display();
  player2.display();
  player2.makeQuiter(8);
  player2.display();
  player1.playSong("Merry Christmas");
  player1.display();
  player1.addSong("Merry Christmas")
  player1.playSong("Merry Christmas");
  player1.display();
