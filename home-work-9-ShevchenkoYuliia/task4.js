/**
Створіть тип об'єктів Геометрична фігура, визначте в ньому
приватні властивості для встановлення центру фігури.
Для доступу до цих властивостей визначте необхідний метод/методи.
На основі цього типу створіть два нових типи (спадкоємці) - Прямокутник і Коло.
У цих типах визначте особливі приватні характеристики.
(Наприклад, довжина діагоналі для Прямокутника та радіус для Круга).
До кожного з типів додайте публічний метод info(),
який виводить на екран всю доступну інформацію про фігуру.
 */
"use strict"
class GeometricFigure {
    constructor(x, y) {
        this._centerX = x;
        this._centerY = y;
    }
    get centerX() {
        return this._centerX;
    }
    set centerX(value) {
        this._centerX = value;
    }
    get centerY() {
        return this._centerY;
    }
    set centerY(value) {
        this._centerY = value;
    }
    info() {
        console.log("Center: " + "(" + this._centerX + "," + this._centerY + ")");
    }
}

class Rectangle extends GeometricFigure {
    constructor(x, y, width, height) {
        super(x, y);
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    info() {
        super.info();
        console.log("Width: " + this._width, "Height: " + this._height);
    }
}
class Circle extends GeometricFigure {
    constructor(x, y, radius) {
        super(x, y);
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    info() {
        super.info();
        console.log("Radius: " + this._radius);
    }
}

const rectangle = new Rectangle(0, 0, 3, 7);
rectangle.info();

const circle = new Circle(1, 1, 12);
circle.info();
