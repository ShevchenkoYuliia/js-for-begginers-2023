"use strict";
var  moduleName = (function(){
    var length;
    var width;
    function square(){
      return length * width;
    }
    function perimeter(){
      return 2 * (length + width);
    }
  return {
    setLength: function (number){
      try {
        if (typeof number !== 'number' || isNaN(number) || number <= 0) {
          throw new Error('Invalid length. Please provide a positive number.');
        }

        length = number;
      } catch (error) {
        console.error(error.message);
        process.exit(1);
      }
    },
    setWidth: function(number){
      try {
        if (typeof number !== 'number' || isNaN(number) || number <= 0) {
          throw new Error('Invalid width. Please provide a positive number.');
        }

        width = number;
      } catch (error) {
        console.error(error.message);
        process.exit(1);
      }
    },
    square: function(){
      return square();
    },
    perimeter: function(){
      return perimeter();
    }
  }
}());