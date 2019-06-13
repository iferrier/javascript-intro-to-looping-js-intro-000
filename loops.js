var array, n, num, i;

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while (n>0) {
    console.log(--n);
  }
  return("done");
}

function incrementVariable (i) {
  i = i - 1;
  return i;
}

function doWhileLoop(num) {
    do {
      console.log("I run once regardless.");
    } while (incrementVariable() < num);
  }

var array = [];
var n= 5;
var num = 10;
var i = 0;

forLoop (array);

whileLoop(n);

doWhileLoop()();
