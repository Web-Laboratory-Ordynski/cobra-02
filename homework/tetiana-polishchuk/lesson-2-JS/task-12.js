const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var result = 0;
rl.question("Type a string of numbers via comma ", function (stringOfNumbers) {
    stringOfNumbers = stringOfNumbers.split(',');
    for (let i = 0; i <= stringOfNumbers.length; i++) {
        if (result < stringOfNumbers[i]) {
            result = stringOfNumbers[i];
        }
    }
    rl.close();
});

rl.on("close", function () {
    console.log(result);
    process.exit(0);
});