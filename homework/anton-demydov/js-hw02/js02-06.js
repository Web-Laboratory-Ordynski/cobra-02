/* 6) Написать конвертор валют. 
Пользователь вводит количество USD, выбирает, 
в какую валюту хочет перевести EUR, UAN или AZN, 
и получает в ответ соответствующую сумму. */

var dollar = process.argv[2];
var val = process.argv[3];

// var dollar = prompt("Сумма");
// var val = prompt("На какую валюту хотите поменять? (Введите eu, az, ua)");
var currency;

if (val == undefined) { val = "uah" };
val = val.toUpperCase();

function exchange(result) {
    switch (val) {
        case "EU":
        case "EUR":
            val = "Евро";
            currency = 0.87;
            result = (Math.round(dollar * currency * 100) / 100);
            break;
        case "AZ":
        case "AZN":
            val = "Азербайджанских манат";
            currency = 1.754;
            result = (Math.round(dollar * currency * 100) / 100);
            break;
        default:
            val = "Гривен";
            currency = 28.28;
            result = (Math.round(dollar * currency * 100) / 100);
            break;
    }
    return result;
}

console.log("Ваша сумма составит " + exchange(dollar, currency) + " " + val);