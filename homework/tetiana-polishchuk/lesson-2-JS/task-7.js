const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var result = 0;

rl.question("Сумма Вашей покупки? ", function (sum) {
    sum = +sum;
    if ((sum >= 200) && (sum < 300)) {
        result = sum * 0.97;
    }

    if ((sum >= 300) && (sum < 500)) {
        result = sum * 0.95;
    }

    if (sum >= 500) {
        result = sum * 0.93;
    }

    rl.close();
});

rl.on("close", function () {
    console.log('Сумма к оплате со скидкой: ' + result);
    process.exit(0);
});