var args = process.argv;
var userInput = args[2];

function hasIdenticalNumbers() {
    if (userInput.length === 3) {
        userInput = userInput.split('');
        let result = [];
        for (let i = 0; i <= 2; i++) {
            if (result.includes(userInput[i])) {
                console.log('has identical numbers');
                return
            } else {
                result[i] = userInput[i];
            }
        }
        console.log('no identical numbers');
        return
    } else {
        console.log('invalid input');
        return
    }
}

hasIdenticalNumbers(userInput);