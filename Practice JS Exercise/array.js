/**
 * 1. Create a function to find all numbers in a array containing variables of multiple types
 * 2. Create a function to function to find and print all even numbers in an array
 * 3. Create a function to initialize and multiply two arrays, please research for the mechanism on how how to multiply an array
 */
//1. filtering arrays
function integers(value) {
  return value >= 0 || value <= 0;
}
var types = [
  -24,
  1.54,
  1,
  "Mango",
  "Banana",
  2,
  3,
  6,
  8,
  "Apple",
  22,
  54,
  97,
  27,
  64,
];

var filteredTypes = types.filter(integers);
//2. printing ONLY even numbers in array
var evenFilteredTypes = new Array();
for (i = 0; i < filteredTypes.length; i++) {
  if (filteredTypes[i] % 2 === 0) {
    evenFilteredTypes.push(filteredTypes[i]);
  }
}
console.log(evenFilteredTypes);

//3.multiplying arrays
var numbersOnly = [1, 33, 54, 2, 3, 5];
var mulArray = new Array();
for (i = 0; i < filteredTypes.length; i++) {
  mulArray[i] = filteredTypes[i] * numbersOnly[i];
}
var mulArray = mulArray.filter(integers);
console.log(mulArray);
