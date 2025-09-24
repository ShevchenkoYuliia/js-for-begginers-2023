/**
Створіть тип об'єктів Квадрат, визначте захищену властивість для
збереження значення сторони. Для доступу до цієї властивості
визначте необхідний метод/методи. Визначте також публічний метод,
який повертає його периметр. На основі цього типу створіть
тип Куб та перевизначте метод отримання периметра.
Реалізуйте 2 версії поточного завдання, використовуючи такі способи перевизначення:
1. Без розширення (повністю перевизначити метод батьківського типу);
2. З розширенням (використовувати результат методу батьківського типу  для подальших розрахунків).
 */
"use strict"
class Square {
    constructor(side) {
      this._side = side;
    }
  
    get side() {
      return this._side;
    }
  
    set side(value) {
      this._side = value;
    }
  
    calculatePerimeter() {
      return 4 * this._side;
    }
  }
  
  class Cube extends Square {
    calculatePerimeter() {
      return 12 * this._side;
    }
  }
  class SquareWithExtension {
    constructor(side) {
      this._side = side;
    }
    get side() {
      return this._side;
    }
    set side(value) {
      this._side = value;
    }
    calculatePerimeter() {
      return 4  * this._side;
    }
  }
  
  class CubeWithExtension extends SquareWithExtension {
    calculatePerimeter() {
      return super.calculatePerimeter() * 3;
    }
  }
  const square = new Square(5);
  console.log("Square Perimeter: " + square.calculatePerimeter()); 
  
  const cube = new Cube(5);
  console.log("Cube Perimeter: " + cube.calculatePerimeter()); 
  
  const squareWithExtension = new SquareWithExtension(50);
  console.log("SquareWithExtension Perimeter: " + squareWithExtension.calculatePerimeter()); 
  
  const cubeWithExtension = new CubeWithExtension(50);
  console.log("CubeWithExtension Perimeter: "+ cubeWithExtension.calculatePerimeter()); 
  