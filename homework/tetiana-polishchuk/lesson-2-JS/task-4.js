var args = process.argv;
var userInput = +args[2];

function leapYear() {
    if (!isNaN(userInput)) {
        if (((userInput % 4 === 0) || (userInput % 400 === 0)) && (userInput % 100 !== 0)) {
            console.log('Высокосный')
            return
        } else {
            console.log('Не высокосный')
            return
        }
    } else {
        console.log('invalid input');
    }
}

leapYear(userInput);