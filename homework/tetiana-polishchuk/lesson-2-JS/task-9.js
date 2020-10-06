const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var result = 0;

rl.question(" How much is 10^3? | 100 | 1000 | 10000 ", function (firstAnswer) {
    rl.question(" What city is the capital of Ukraine? | Kyiv | Lviv | Kharkiv ", function (secondAnswer) {
        rl.question(" Typeof [] is... | Object | Array | Number ", function (thirdAnswer) {

            if (firstAnswer === '1000') {
                result += 2;
            }

            if (secondAnswer === 'Kyiv') {
                result += 2;
            }
            if (thirdAnswer === 'Object') {
                result += 2;
            }


            rl.close();
        });
    });
});

rl.on("close", function () {
    console.log('Your result is ' + result);
    process.exit(0);
});