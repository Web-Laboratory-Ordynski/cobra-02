// Написать конвертор валют. Пользователь вводит количество USD, выбирает,
// в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var sum = +prompt("Введите сумму в USD", " ");
var desired = prompt("Введите желаемую валюту EUR/UAH/AZN", " ");

var eurCourse = 0.84;
var uahCourse = 27.60;
var aznCourse = 1.70;

var userData = {
	userSum: sum,
	userDesired: desired
};

if (userData.userDesired == "eur") {
	console.log("Получите " + (userData.userSum * eurCourse).toFixed(2) + " EUR");
} else if (userData.userDesired == "uah") {
	console.log("Получите " + (userData.userSum * uahCourse).toFixed(2) + " UAH");
} else if (userData.userDesired == "azn") {
	console.log("Получите " + (userData.userSum * aznCourse).toFixed(2) + " AZN");
}
