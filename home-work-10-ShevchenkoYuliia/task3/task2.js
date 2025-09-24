/**
напишіть функцію sumSliceArray(arr, first, second),
яка приймає масив arr і два числа (first и second) – порядкові
номери елементів масиву, які необхідно скласти.
Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й
елементи. Функція повинна генерувати винятки, якщо були введені
не числа, і коли одне з чисел або обидва більші за довжину масиву.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
 */
function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
        throw new Error("Перший аргумент повинен бути масивом");
    }
    if (typeof first !== "number" || typeof second !== "number") {
        throw new Error("Обидва аргументи повинні бути числами");
    }
    if (first >= arr.length || second >= arr.length) {
        throw new Error("Один або обидва індекси перевищують довжину масиву");
    }
    return arr[first] + arr[second];
}