// Створіть тип об'єктів MP3 плеєра за допомогою прототипів.
"use strict"
function MP3Player(name) {
    this.name = name;
    this.isPlaying = false;
}
MP3Player.prototype.play = function() {
    if (!this.isPlaying) {
       console.log(this.name + " відтворює музику");
       this.isPlaying = true;
    }  
    else {
       console.log(this.name + " вже відтворює музику");
    }
};  
MP3Player.prototype.pause = function() {
    if (this.isPlaying) {
       console.log(this.name +  " призупиняє відтворення музики");
       this.isPlaying = false;
    } 
    else {
       console.log(this.name + " не відтворює музику");
    }
};
MP3Player.prototype.stop = function() {
    console.log(this.name + " зупиняє відтворення музики");
    this.isPlaying = false;
};
  var myPlayer = new MP3Player("MP3Player");

  myPlayer.play();
  myPlayer.stop();     
  myPlayer.play(); 
  myPlayer.pause();   
    
     