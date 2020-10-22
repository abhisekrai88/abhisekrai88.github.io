/**
 * Function adds two arguments that contain / return numbers of any type 
 * @param {} x 
 * @param {*} y 
 */

/**
 * Write an addition function for following tests
 * 1. Two numbers
 * 2. Two number arrays
 * 3. Two functions that return numbers
 * @param {} x 
 * @param {*} y 
 */



function add(x, y) {
    return x + y;
}
function addTwoArrays([array1], [array2]) {
    return array1 + array2;
}

function addNumbersFromTwoFunctions(integer1, integer2){
    return integer1() + integer2();
}

function subtract(a, b){
    return a - b;
}