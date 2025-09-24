/**
1. Створіть новий об'єкт tv;
2. Додайте властивість currentChannel зі значенням 1;
3. Додайте метод nextChannel(), який збільшує currentChannel на одиницю;
4. Додайте метод previousChannel(), який зменшує поточний currentChannel на
одиницю;
5. Додати метод setChannel(number), який переходить на канал за номером.
 */
"use strict";
var tv = Object();
tv.currentChannel = 1;
tv.nextChannel = function(){
    this.currentChannel++;
}
tv.previousChannel = function(){
    this.currentChannel--;
}
tv.setChannel = function(number){
    this.currentChannel = number;
}
tv.display = function(){
    console.log(tv.currentChannel)
}

for(var i = 0; i < 5; i++){
    tv.nextChannel();
    tv.display()
}
tv.previousChannel()
tv.display()
tv.setChannel(767)
tv.display()