var args = process.argv;
var userInput = args[2];


function sortArray(userInput) {
    userInput = userInput.split(',');
    userInput.sort(function (a, b) {
        return a - b;
    });
    console.log(userInput);
}

sortArray(userInput);