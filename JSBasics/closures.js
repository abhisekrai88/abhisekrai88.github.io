//Global scope variable
// var name = 'Vaibhav';

// var fullName = (function() {
//     var name = 'Vai';
//     return function() {
//         name = name + ' ' + 'Vashishtha';
//         console.log(name);
//     };
// })();

// alert(fullName());

/**
 * To create a process to update a counter
 */
//global scope:
/*var counter = 0;

/**
 * Based on the option increment / decrement a counter
 * @param {*} option
 */
/*function updateCounter(option) {
  //local scope:
  var counter = 0;
  if (option == "increment") {
    counter++;
  } else if (option == "decrement") {
    counter--;
  }
}
var randomCounter = function () {
  counter = 100;
};*/

var updateCounter = (function () {
  var counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

alert(updateCounter());
