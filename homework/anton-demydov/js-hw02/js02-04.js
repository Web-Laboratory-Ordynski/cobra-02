/* 4) Запросить у пользователя год и проверить, високосный он или нет.
    Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
 */

var args = process.argv;
var userYear = args[2];

if ((userYear % 4) == 0) {
    console.log(userYear + " год високосный");
} else { console.log(userYear + " год НЕ високосный"); }