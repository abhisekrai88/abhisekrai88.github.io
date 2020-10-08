function addTwoNumbers(a, b = 0) {
  var sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
  return "The sum of ${a} and ${b} is ${sum}";
}

var fullNameOld = function (firstName, lastName) {
  var bool1 = new Boolean("Abhisek");
  var bool2 = new Boolean(false);
  console.log(bool1);
  console.log(bool2);
  return true + false;
};

const fullName = function (firstName, lastName) {
  return `my full name is ${firstName} ${lastName}`;
};

console.log(fullNameOld("Abhisek", "Rai"));

console.log(fullName("Abhisek", "Rai"));
