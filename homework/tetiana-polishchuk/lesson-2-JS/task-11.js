const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type first number ", function (numberFirst) {
    rl.question("Type second number ", function (numberSecond) {
        if (numberFirst > numberSecond) {
            console.log(numberFirst);
        } else {
            console.log(numberSecond)
        }

        rl.close();
    });
});

rl.on("close", function () {
    process.exit(0);
});