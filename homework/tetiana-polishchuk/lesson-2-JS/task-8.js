const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var result = 0;

rl.question("Длинна окружности? ", function (howLong) {
    rl.question("Периметр квадрата? ", function (perimeter) {
        var squareSide = perimeter / 4;
        var circleDiameter = howLong / 3.14;

        if (squareSide >= circleDiameter) {
            result = 'Поместится'
        } else {
            result = 'Не поместится';
        }

        rl.close();
    });
});

rl.on("close", function () {
    console.log(result);
    process.exit(0);
});