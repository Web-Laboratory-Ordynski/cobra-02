function dayOfWeek() {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (let index = 0; confirm(days[index]); index++) {
        if (index === 6) {
            index = -1;
        }
    }
}


let result;
function number(n){
  result = prompt(`> ${n} < ${n} = ${n}` );
  if (result === '=') return n
    else if (result === '<' ) return number(n/2)
      else if (result === '>' ) return number(1.5*n);
}
number(100);