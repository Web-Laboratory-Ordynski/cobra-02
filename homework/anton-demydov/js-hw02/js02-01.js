/* 1) Запросить у пользователя его возраст и определить, кем он является: 
    ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
*/

var args = process.argv;
var userAge = args[2];
console.log(userAge);

if (userAge <= 2) {
    console.log("Малыш");
} else if (userAge <= 11) {
    console.log("Ребенок");
} else if (userAge <= 18) {
    console.log("Подросток");
} else if (userAge <= 60) {
    console.log("Взрослый");
} else {
    console.log("Пенсионер");
}