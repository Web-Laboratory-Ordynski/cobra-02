var args = process.argv;
var userInput = args[2];
var positive = 0;
var negative = 0;
var nulls = 0;
var even = 0;
var odds = 0;

function howManyNumbers(userInput) {
    userInput = userInput.split(',');
    userInput.forEach(x => {
        x === '0' ? nulls++ : x > 0 ? positive++ : negative++;
        x % 2 == 0 ? even++ : odds++;
    });
    console.log('positive: ' + positive + ' ' + 'negative: ' + negative + ' ' + 'nulls: ' + nulls + ' '
     + 'even: ' + even + ' ' + 'odd: ' + odds)

}

howManyNumbers(userInput);