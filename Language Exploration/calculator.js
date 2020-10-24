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
 * 4. Two nested arrays of numbers

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

//to add up 2 arrays
/*function sumArray(a1,a2) {
    let a3 = [];
    for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
        a3.push((a1[i] || 0) + (a2[i] || 0));
    }
    let result = 0;
    for (let i = 0; i < a3.length; i++) {
    result += a3[i];
    }
    return result;
    }*/
    