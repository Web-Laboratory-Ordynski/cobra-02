/* 10) Запросить дату (день, месяц, год) и вывести следующую за ней дату.
Учтите возможность перехода на следующий месяц, год, а также високосный год.*/

var year = Number(process.argv[2]);
var month = Number(process.argv[3]);
var day = Number(process.argv[4]);

// var year = Number(prompt("Введите год"));
// var month = Number(prompt("Введите месяц"));
// var day = Number(prompt("Введите число"));

var userDate = [year, month, day];
var nextDay = [];

function correctDate(y, m, d) {
    if (day > 31) {
        console.log("Ошибка! Вы ввели неверную дату, не может быть больше 31 дня");
        return;
    } else if (day <= 0 || month <= 0) {
        console.log("Ошибка! Число и месяц не может быть отрицательным");
        return;
    } else if (month > 12) {
        console.log("Ошибка! Вы ввели неверную дату, в году всего 12 месяцев");
        return;
    } else {
        nextDay = checkDate(year, month, day)
    }
}

function checkDate(y, m, d) {

    function bissextile(year) {
        if ((year % 4) == 0) { // год високосный
            return true;
        }
        return false; // год обычный
    }

    function checkMonth(userMonth) {
        if (month == 2) {
            if (bissextile(year)) {
                return true; // год високосный
            } else { return false }; // год обычный
        } else {
            switch (month) {
                case 4: // 30 дней
                case 6:
                case 9:
                case 11:
                    return true;
                case 12:
                    return true;
                default: // 31 день
                    return false;
            }
        }
    }

    switch (day) {
        case 28:
            if (checkMonth(month)) {
                day = day + 1;
                console.log("если февраль високосный " + nextDay);
            } else if (month == 2) {
                day = 1;
                month = month + 1;
                console.log("если февраль обычный " + nextDay);
            } else {
                day = day + 1;
            }
            break;
        case 29:
            if (checkMonth(month)) {
                if (month == 2) {
                    day = 1;
                    month = month + 1;
                    console.log("в этом феврале 29 дней " + nextDay);
                    break;
                } else {
                    day = day + 1;
                    break;
                }
            } else if (month == 2) {
                day = "неверная дата";
                console.log("ошибка, заданный год не високосный, такой даты быть не может");
                return;
            }
            day = day + 1;
            break;
        case 30:
            if (checkMonth(month)) {
                if (month == 2) {
                    console.log("Ошибка! В этом феврале только 29 дней");
                    return;
                } else {
                    day = 1;
                    month = month + 1;
                    console.log("в этом месяце 30 дней " + nextDay);
                }
            } else if (month == 2) {
                day = "неверная дата";
                console.log("Ошибка! В этом феврале только 28 дней");
                return;
            } else {
                day = day + 1;
                console.log("в месяце 31 день " + nextDay);
            }
            break;
        case 31:
            if (checkMonth(month)) {
                if (month == 12) {
                    day = 1;
                    month = 1;
                    year = year + 1;
                    console.log("конец года " + nextDay);
                } else if (month == 2) {
                    console.log("Ошибка! В этом феврале только 29 дней");
                    return;
                } else if (checkMonth(month)) {
                    console.log("Ошибка! В этом месяце только 30 дней");
                    return;
                } else {
                    day = 1;
                    month = month + 1;
                }
            } else if (month == 2) {
                console.log("Ошибка! В этом феврале только 28 дней");
                return;
            } else {
                day = 1;
                month = month + 1;
            }
            break;
        default:
            day = day + 1;
            break;
    }
    nextDay = [year, month, day];
    console.log("Вы ввели " + userDate);
    return console.log("Следующий день " + nextDay);;
}

nextDay = correctDate(year, month, day);