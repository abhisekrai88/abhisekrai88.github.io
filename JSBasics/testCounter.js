/**
 * Creating a counter that can be incremented by a function
 * or decremented by a function
 * or i can get the current value of the counter by a function
 * or i can reset the counter to zero
 */
var count = 0;

function incrementCount() {
  count++;
  alert(count);
}
function decrementCount() {
  count--;
  alert(count);
}
function resetCount() {
  count = 0;
  alert(count);
}
function getCount() {
  alert(count);
}
