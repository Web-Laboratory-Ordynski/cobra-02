var args = process.argv;
var userInput = +args[2];

function specialSymbol(userInput) {
    if (!isNaN(userInput)) {
        switch (userInput) {
            case 1:
                console.log('!');
                break;
            case 2:
                console.log('@');
                break;
            case 3:
                console.log('#');
                break;
            case 4:
                console.log('$');
                break;
            case 5:
                console.log('%');
                break;
            case 6:
                console.log('^');
                break;
            case 7:
                console.log('&');
                break;
            case 8:
                console.log('*');
                break;
            case 9:
                console.log('(');
                break;
            default:
                console.log('your number is not correct');
        }
    } else {
        console.log('invalid input');
    }
}
specialSymbol(userInput);