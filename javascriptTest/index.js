/* JavaScript Test Page */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers1 = numbers.filter(isEven);
let evenNumbers2 = numbers.filter((element) => element % 2 === 0);
let squares = numbers.map((element) => Math.pow(element, 2));
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Even Numbers with callback:", evenNumbers1);
console.log("Even Numbers with arrow function:", evenNumbers2);
console.log("Squares:", squares);
console.log("Sum:", sum);

function isEven(element) {
    return element % 2 === 0;
}