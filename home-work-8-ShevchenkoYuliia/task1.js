/**
Напишіть функцію mul(), яка приймає будь-яку кількість параметрів
різного типу та повертає добуток параметрів типу Number.
Якщо параметри Number відсутні, повертає число 0.
 */
"use strict"
function mul(...args) {
  const numbers = args.filter(value => typeof value === 'number');
  if (numbers.length === 0) {
    return 0;
  }
  const result = numbers.reduce((acc, curr) => acc * curr, 1);
  return result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
