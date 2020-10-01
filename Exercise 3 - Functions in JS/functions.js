const array1 = [1, 2];
const array2 = [7, 8];

function addingArrays(array1, array2) {
  var array3 = new Array();
  for (counter = 0; counter < array1.length; counter++) {
    array3[counter] = array1[counter] + array2[counter];
  }
  console.log(array3);
}
