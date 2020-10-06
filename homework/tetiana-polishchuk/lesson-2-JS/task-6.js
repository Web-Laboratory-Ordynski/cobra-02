const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var result = 0;

rl.question("How much dollars do you want to convert? ", function (dollars) {
    rl.question("What currency do you want to convert in? ( EUR | UAH | AZN) ", function (currency) {
        switch (currency) {
            case 'EUR':
                result = (dollars * 0.84) + ' EURO';
                break;

            case 'UAH':
                result = (dollars * 27.49) + ' UAH';
                break;

            case 'AZN':
                result = (dollars * 1.7) + ' AZN';
                break;

            default:
                result = 'invalid currency';
                break
        }


        rl.close();
    });
});

rl.on("close", function () {
    console.log(result);
    process.exit(0);
});