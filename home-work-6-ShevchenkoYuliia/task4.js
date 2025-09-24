// Cтворити об'єкт, який описує MP3 плеєр.
"use strict";
var mp3 = {
    model: "1234",
    storage_capacity: 15360,
    volume: 45,
    current_song: "Merry Christmas",
    isPlaying: false,
    makeLouder: function(number){
        this.volume += number; 
    },
    makeQuieter: function(number){
        this.volume -= number;
    },
    setCurrentSong: function(songName){
        this.current_song = songName;
    },
    play: function(songName){
        if(!this.isPlaying ){
            this.setCurrentSong(songName);
            this.isPlaying = true;
            console.log("Play: " + songName);
        }
    },
    stop: function(){
        if(this.isPlaying ){
            this.isPlaying = false;
            console.log("Stop");
        }
    },
    display: function(){
        console.log("Model: " + this.model);
        console.log("Memory capacity: " + this.storage_capacity + " MB");
        console.log("Volume: " + this.volume);
        console.log("Current song: " + this.current_song);
        console.log("isPlaying: " + this.isPlaying);
        console.log();
    },
};
mp3.display();
mp3.makeLouder(20);
mp3.display();
mp3.play("Jingle Bells");
mp3.display();
mp3.stop();
mp3.makeQuieter(10);
mp3.display();