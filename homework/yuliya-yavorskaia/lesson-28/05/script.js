// Запросить пятиразрядное число и определить, является ли оно палиндромом.

var args = process.argv;
var userInput = args[2];

userInput = String(userInput);

var arr = [];
arr[0] = userInput[0];
arr[1] = userInput[1];
arr[2] = userInput[2];
arr[3] = userInput[3];
arr[4] = userInput[4];

if (arr[0] == arr[4] && arr[1] == arr[3]) {
  console.log('Палиндром');
} else {
  console.log('Не палиндром');
}
