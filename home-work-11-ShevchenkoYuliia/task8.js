// Перепишіть код, замінивши цикл for на метод map().

var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = "<li>" + arr[i] + "</li>";
}
console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]
