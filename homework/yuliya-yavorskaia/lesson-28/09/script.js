// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
// За каждый правильный ответ начисляется 2 балла.
// После вопросов выведите пользователю количество набранных баллов.

var question1 = prompt("3 * 3 = 9; Варианты: да, нет, не знаю", " ");
var question2 = prompt("4 * 4 = 16; Варианты: да, нет, не знаю", " ");
var question3 = prompt("5 * 5 = 25; Варианты: да, нет, не знаю", " ");

var pointsQuestion1 = 0;
var pointsQuestion2 = 0;
var pointsQuestion3 = 0;

var userData = {
	userAnswer1: question1,
	userAnswer2: question2,
	userAnswer3: question3
};

if (userData.userAnswer1 == "да") {
	pointsQuestion1 = 2;
}

if (userData.userAnswer2 == "да") {
	pointsQuestion2 = 2;
}

if (userData.userAnswer3 == "да") {
	pointsQuestion3 = 2;
}

var result = pointsQuestion1 + pointsQuestion2 + pointsQuestion3;
console.log(result);
