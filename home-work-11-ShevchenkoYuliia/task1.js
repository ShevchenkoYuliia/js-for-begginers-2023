/**
Створіть тип об'єктів прямокутник із властивостями
координат верхньої лівої (x1, y1) та нижньої правої (x2, y2) вершини.
Перевизначте методи toString() та valueOf().
Метод toString() повинен повертати рядок із описом поточного стану.
Метод valueOf() повинен повертати поточний периметр.
 */
class Rectangle{
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
      }
      toString() {
        return `Rectangle: (${this.x1}, ${this.y1}), (${this.x2}, ${this.y2})`;
    }
    
      // Перевизначення методу valueOf()
    valueOf() {
        // Розрахунок периметру
        const width = Math.abs(this.x2 - this.x1);
        const height = Math.abs(this.y2 - this.y1);
        return 2 * (width + height);
    }
}
const myRectangle = new Rectangle(0, 0, 5, 5);
console.log(myRectangle.toString()); 
console.log(myRectangle.valueOf()); 