/**
Допишіть код, щоб у консолі браузера з'явилися рядки, які написані у коментарях.
Використайте методи явного задання this
 */
"use strict"
var country = {
  name: "Ukraine",
  language: "ukrainian",
  capital: {
    name: "Kyiv",
    population: 2907817,
    area: 847.66,
  },
};
function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}
format.call(country,"<",">"); // "<Ukraine>"
format.apply(country , ["[","]"]); // "[Ukraine]"
format.call( country.capital, "\"", "\""); // ""Kyiv""
format.apply( country.capital, [" "," "]); // "Kyiv"
