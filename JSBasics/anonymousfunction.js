function addNumbers() {
  sum();
}

/*anonymous function*/
var sum = function () {
  alert(1 + 2);
};

var number1 = function () {
  return 1;
};
function number2() {
  return 2;
}

function addTwoNumber() {
  alert(number1() + number2());
}
