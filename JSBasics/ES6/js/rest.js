let sum = (...args) => {
    return args.reduce((start, value) => {
        return start +=value;
    },0);
}

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));

sum = (num1,num2,num3=0) => num1+num2+num3;

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));

let arrayOfNumbers = [1,2,1,3,5,6,7,1,2,3,4];
/**
 * first and second element and the rest of this arrayOfNumbers
 */

 let [first, second, ...rest] = arrayOfNumbers;