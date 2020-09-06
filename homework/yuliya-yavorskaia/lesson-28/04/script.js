// Запросить год и проверить, високосный он или нет.
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var args = process.argv;
var year = args[2];

year = Number(year);

console.log('Введено: ', year);

if ((year % 4 === 0 || year % 400 === 0) && (year % 100 !== 0)) {
	console.log('Високосный');
} else {
	console.log('Не високосный');
}
