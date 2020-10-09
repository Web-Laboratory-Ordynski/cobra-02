/* 5) Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.  */

var userNumber = process.argv[2];

function palindr(userNumber) {
    var desc = [];
    for (i = userNumber.length - 1; i >= 0; i--) {
        desc = desc.concat([userNumber[i]]);
    }
    userNumber = userNumber.toString();
    desc = desc.toString();

    function compare(result) {
        if (userNumber === desc) {
            console.log(userNumber + " и " + desc);
            console.log("Ваше число является палиндромом");
        } else {
            console.log(userNumber + " и " + desc);
            console.log("Ваше число НЕ является палиндромом");
        }
    }
    compare();
}


function count(userNum) {
    if (userNumber.length == 5) {
        userNumber = userNumber.split("");

        palindr(userNumber);

    } else if (userNumber.length < 5) {
        console.log("Ваше число слишком маленькое");
    } else {
        console.log("Ваше число слишком большое");
    }
}

count(userNumber);