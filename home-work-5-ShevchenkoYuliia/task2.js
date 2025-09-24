// Допишіть код, щоб функція format(data, type) перевизначала себе залежно від параметра type:

function format(data, type) {
    if (type === "number") {
        format = function (data) {
            return Number(data);
        };
    } else if (type === "string") {
        format = function (data) {
            return String(data);
        };
    } else if (type === "boolean") {
        format = function (data) {
            return Boolean(data);
        };
    }

    return format(data);
}
var Format = format;  
console.log(Format("1", "number")); // 1
console.log(format("1")); // 1
console.log(typeof format()); // "number"

console.log(Format("Hello", "boolean")); // true
console.log(format(1)); // true
console.log(typeof format()); // "boolean"

console.log(Format(true, "string")); // "true"
console.log(format(1)); // "1"
console.log(typeof format()); // "string"
