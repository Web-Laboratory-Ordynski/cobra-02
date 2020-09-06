// Запросить у пользователя длину окружности и периметр квадрата.
// Определить, может ли такая окружность поместиться в указанный квадрат.

var circumference = +prompt("Введите длину окружности", " ");
var perimeter = +prompt("Введите периметр квадрата", " ");


var userData = {
	userСircumference: circumference,
	userPerimeter: perimeter
};

var result = ((userData.userPerimeter / 4) >= userData.userСircumference) ? "Поместится" : "Не поместится";

console.log(result);
