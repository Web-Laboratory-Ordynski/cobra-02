// 7) Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//    от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var bought = process.argv[2];
// var bought = prompt("");

function compareSum() {
    var discount;
    var perc;
    if (bought >= 200 && bought < 300) {
        discount = Math.round((bought * 0.03) * 100) / 100;
        perc = 3;
        return { discount, perc };
    } else if (bought >= 300 && bought < 500) {
        discount = Math.round((bought * 0.05) * 100) / 100;
        perc = 5;
        return { discount, perc };
    } else if (bought >= 500) {
        discount = Math.round((bought * 0.07) * 100) / 100;
        perc = 7;
        return { discount, perc };
    } else {
        perc = 0;
        discount = bought;
        return { discount, perc };
    }
    // return discount, perc;

}

var discountSum = compareSum(bought);
var total = bought - discountSum.discount;

console.log("Сумма покупки = " + bought + " грн");
console.log("Ваша скидка составит " + discountSum.discount + " грн (" + discountSum.perc + "%)");
console.log("Сумма к оплате " + Math.round(total * 100) / 100 + " грн");