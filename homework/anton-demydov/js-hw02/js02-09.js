/* 9) Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
За каждый правильный ответ начисляется 2 балла.
После вопросов выведите пользователю количество набранных баллов. */

var question1 = ["Кто не снимался в фильме Армагеддон?\n", "1 - Кара Делевинь\n", "2 - Кристина Риччи\n", "3 - Лив Тайлер\n"];
var q1 = prompt(question1);
var question2 = ["Кто не снимался в фильме Пятый элемент?\n", "1 - Брюс Уиллис\n", "2 - Гарри Олдман\n", "3 - Джейк Джиленхолл\n"];
var q2 = prompt(question2);
var question3 = ["Кто не снимался в сериале Ночной администратор?\n", "1 - Крис Эванс\n", "2 - Том Хиддлстон\n", "3 - Хью Лори\n"];
var q3 = prompt(question3);
var rightAnswers = [2, 3, 1];

function quiz(answers) {
    var answers = [];
    answers[0] = (q1 == rightAnswers[0]) ? 2 : 0;
    answers[1] = (q2 == rightAnswers[1]) ? 2 : 0;
    answers[2] = (q3 == rightAnswers[2]) ? 2 : 0;

    return answers[0] + answers[1] + answers[2];
}
console.log("Ваш результат " + quiz());