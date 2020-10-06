var args = process.argv;
var userInput = args[2];

function howManyFigures(userInput){
    userInput = userInput.split('');
    console.log(userInput.length);
}

howManyFigures(userInput);