/* 3) Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры. */

var userNumber = process.argv[2];

function isThree() {
    var result = false;
    if (userNumber.length == 3) {

        if (isNaN(userNumber)) {
            console.log("это не число");
            result = false;
        } else {
            console.log("хорошее число");
            result = true;
        }

    } else if (userNumber.length < 3) {
        console.log("слишком мало знаков");
    } else {
        console.log("слишком много знаков");
    }
    return result;
}

if (isThree(userNumber) == true) {

    userNumber = userNumber.split("");
    if (userNumber[0] == userNumber[1] && userNumber[1] == userNumber[2] && userNumber[0] == userNumber[2]) {
        console.log("все числа равны " + userNumber[0] + " " + userNumber[1] + " " + userNumber[2]);

    } else if (userNumber[0] == userNumber[1] || userNumber[1] == userNumber[2] || userNumber[0] == userNumber[2]) {

        switch (userNumber[0] == userNumber[1] || userNumber[1] == userNumber[2] || userNumber[0] == userNumber[2]) {
            case userNumber[0] == userNumber[1]:
                console.log("Эти числа равны " + userNumber[0] + " " + userNumber[1]);
                break;
            case userNumber[1] == userNumber[2]:
                console.log("Эти числа равны " + userNumber[1] + " " + userNumber[2]);
                break;
            case userNumber[0] == userNumber[2]:
                console.log("Эти числа равны " + userNumber[0] + " " + userNumber[2]);
                break;
            default:
                break;
        }

    } else {
        console.log("равных чисел нет");
    }
}