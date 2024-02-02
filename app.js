//---------------------------------------
//scope

{
  let count = 0;
  if (true) {
    count += 1;
  }

  console.log(count);
}
console.log(count);

// -----------------

console.log(fruit);

function getSpecialFruit() {
  var fruit = "banana";
  return "Mango";
}

//-------------------------------------------
// Hoisting

if (true) {
  var fruit = "banana";
}

console.log(fruit);
console.log(getSpecialFruit());

function getSpecialFruit() {
  return "Mango";
}

// function declaration

// var getSpecialFruit = function(){
//   return 'Mango';
// }

//------------------
// Closure

// --------------
console.log(getSpecialFruit());

function getSpecialFruit() {
  var fruit = "banana";
  const getFruit = function () {
    return fruit;
  };
  return getFruit();
}
