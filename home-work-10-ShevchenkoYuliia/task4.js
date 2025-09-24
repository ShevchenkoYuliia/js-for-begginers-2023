/*
Напишіть функцію random(min, max, delay, callback), яка через delay
мілісекунд передає callback до черги на виконання.
 - якщо min менше за max, функція генерує випадкове число в діапазоні від min до max
і передає в callback другим параметром.
 - якщо min більше за max, функція створює об'єкт помилки та передає в callback першим параметром.
Для генерації випадкових чисел можна використати метод Math.random().
 */
function random(min, max, delay, callback) {
  if (min < max) {
    setTimeout(function () {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      callback(null, randomNumber);
    }, delay);
  } else {
    setTimeout(function () {
      const error = new Error("min повинно бути менше за max");
      callback(error, null);
    }, delay);
  }
}
random(1, 100, 2000, function (error, data) {
  if (error) {
    console.error(error.message);
  } else {
    console.log("Generated random number:", data);
  }
});
random(1000, 100, 3000, function (error, data) {
  if (error) {
    console.error(error.message);
  } else {
    console.log("Generated random number:", data);
  }
});
