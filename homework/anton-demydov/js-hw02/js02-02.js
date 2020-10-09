/* 2) Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
    который расположен на этой клавише (1–!, 2–@, 3–# и т. д). */
var args = process.argv;
var userNum = args[2];

switch (parseInt(userNum, 10)) {
    case 1:
        console.log('Цифра 1 соответствует знаку "!"')
        break;
    case 2:
        console.log('Цифра 2 соответствует знаку "@"')
        break;
    case 3:
        console.log('Цифра 3 соответствует знаку "#"')
        break;
    case 4:
        console.log('Цифра 4 соответствует знаку "$"')
        break;
    case 5:
        console.log('Цифра 5 соответствует знаку "%"')
        break;
    case 6:
        console.log('Цифра 6 соответствует знаку "^"')
        break;
    case 7:
        console.log('Цифра 7 соответствует знаку "&"')
        break;
    case 8:
        console.log('Цифра 8 соответствует знаку "*"')
        break;
    case 9:
        console.log('Цифра 9 соответствует знаку "("')
        break;
    default:
        console.log('Цифра 0 соответствует знаку ")"');
        break;
}