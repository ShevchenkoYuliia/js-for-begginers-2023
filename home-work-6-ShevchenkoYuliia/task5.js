"use strict";
var person = [
    {
        name: "John",
        age: 28,
        experience: 1,            
        languages: ["Java", "JavaScript", "SQL"],
    },
    {
        name: "Bill",
        age: 30,
        experience: 5,
        languages: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Mike",
        age: 32,
        experience: 4,
        languages: ["Python", "SQL"],
    }
];

for(var i = 0; i < 3; i++){
    console.log(person[i].name);
    console.log(person[i].age);
    console.log(person[i].experience);
    console.log(person[i].languages);
}