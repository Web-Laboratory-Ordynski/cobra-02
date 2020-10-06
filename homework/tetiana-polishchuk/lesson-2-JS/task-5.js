var args = process.argv;
var userInput = args[2];

function pallindrom(userInput) {
    if (userInput.length == 5) {
        var reversed = userInput.split('').reverse().join('');
        if (reversed === userInput) {
            console.log("Pallindrom");
            return
        } else {
            console.log('Is not a pallindrom');
            return
        }
    } else {
        console.log('invalid input');
        return
    }
}

pallindrom(userInput);