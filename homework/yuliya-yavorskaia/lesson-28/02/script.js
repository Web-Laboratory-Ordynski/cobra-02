// Запросить число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var args = process.argv;
var numeral = args[2];
numeral = Number(numeral);

console.log('Введено: ', numeral);


if (numeral == 0) {
	console.log(')');
} else if (numeral == 1) {
	console.log('!');
} else if (numeral == 2) {
	console.log('@');
} else if (numeral == 3) {
	console.log('#');
} else if (numeral == 4) {
	console.log('$');
} else if (numeral == 5) {
	console.log('%');
} else if (numeral == 6) {
	console.log('^');
} else if (numeral == 7) {
	console.log('&');
} else if (numeral == 8) {
	console.log('*');
} else if (numeral == 9) {
	console.log('(');
} else {
	console.log('Error');
}
