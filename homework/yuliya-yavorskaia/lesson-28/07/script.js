// Вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%,
// от 300 до 500 – 5%, от 500 и выше – 7%

var buy = process.argv;
var buy = buy[2];
var discountedBuy;

buy = Number(buy);

if (buy < 200) {
    (console.log(discountedBuy = buy));
} else if (buy < 300) {
    console.log(discountedBuy = buy - buy * 0.03);
} else if (buy < 500) {
    console.log(discountedBuy = buy - buy * 0.05);
} else {
    console.log(discountedBuy = buy - buy * 0.07);
}

console.log('Cумма со скидкой: ', discountedBuy);
