//task-1
function compareNumbers(a,b){
  a - b === 0 ? console.log('0') : a - b > 0 ? console.log('1') : console.log('-1');
  return
}

compareNumbers(7, 6);

// task-2
function joinNumbers(a,b,c){
  console.log(`${a}${b}${c}`);
}

joinNumbers(1,7,3)

// task-3
function time(a,b,c){
  if ( typeof c != 'number' ) {
      console.log(`${a}:${b}:00`);

  }
  else if ( typeof b != 'number') {
      console.log(`${a}:00:${c}`);

  }
  else {
let arr = [a, b, c];
console.log(arr.join(':'));
} 
}
time(24,'',23);

// task-4
function counter(){
  let result = 0;
  return {
    add: function (number){
          result += number;
          console.log(result);
        },
    retrieve: function (){
    console.log('The counter is currently at:' + ' ' + result);
    }
  }

}
var c = counter();
c.add(5);
c.add(10);
c.retrieve();

// task-4-v2
function counter2(){
  let result2 = 0;
  let calc = {
    add: function (number){
      result2 += number;
      console.log(result2);
      return result2;
    },
    retrieve: function (){
      console.log('The counter is currently at:' + ' ' + result2);
      return ('The counter is currently at:' + ' ' + result2);
      } 
  }
  return calc;
}
var b = counter2();
b.add(15);
b.add(100);
b.retrieve();
