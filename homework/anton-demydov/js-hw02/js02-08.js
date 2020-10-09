/* 8) Запросить у пользователя длину окружности и периметр квадрата.
Определить, может ли такая окружность поместиться в указанный квадрат. */

var circle = Number(process.argv[2]);
var square = Number(process.argv[3]);

// var circle = prompt("Длина окружности");
// var square = prompt("Периметр квадрата");

const pi = 3.1415926535;

function calcEqual(cir, sqr) {
    function calcDiam() {
        diameter = Math.round((circle / pi) * 100) / 100;
    }

    function calcSide() {
        sideSqr = square / 4;
    }

    calcDiam(circle);
    calcSide(square);

    if (diameter == sideSqr) {
        console.log("Диаметр этой окружности " + diameter + ", она в точности поместится в наш квадрат")
    } else if (diameter <= sideSqr) {
        console.log("Диаметр этой окружности " + diameter + ", она запросто поместится в наш квадрат")
    } else {
        console.log("Эта окружность слишком большая, ее диаметр " + diameter + ", она никак не поместится в наш квадрат")
    }

}
calcEqual(circle, square);