const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var result = 0;

rl.question(" Date? (dd.mm.yyyy) ", function (date) {
    date = date.split('.');
    result = new Date(date[2], date[1] - 1, date[0]);
    result.setDate(result.getDate() + 1);
    rl.close();

});

rl.on("close", function () {
    console.log('Next day: ' + result);
    process.exit(0);
});