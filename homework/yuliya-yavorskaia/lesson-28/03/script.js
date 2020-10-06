// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

var args = process.argv;
var userInput = args[2];

userInput = String(userInput);

var arr = [];
arr[0] = userInput[0];
arr[1] = userInput[1];
arr[2] = userInput[2];

if (arr[0] == arr[1] || arr[0] == arr[2] || arr[1] == arr[2]) {
  console.log('Есть одинаковые цифры!');
} else {
  console.log('Нет одинаковых цифр!');
}
