
// Random a random number
let random = Math.random();
window.alert(`The random number is: ${random}`);
let round = Math.round(random * 100) / 100;
window.alert(`The rounded number is: ${round}`);
let scaled = round * 100;
window.alert(`The random number between 0 and 100 is: ${scaled}`);

// Use it as a radius
let radius = scaled;
let circleArea = Math.round(Math.PI * Math.pow(radius, 2));
window.alert(`The area of the circle with radius ${radius} is: ${circleArea}`);
let circleCircumference = Math.round(2 * Math.PI * radius);
window.alert(`The circumference of the circle with radius ${radius} is: ${circleCircumference}`);
let maxValue = Math.max(random, round, scaled, circleArea, circleCircumference);
window.alert(`The maximum value among the calculated values is: ${maxValue}`);

// Manipulating with a string as a number
const PI_NUMBER = Math.PI.toString();
let piRounded = Math.round(Math.PI * 100) / 100;
window.alert(`The value of PI rounded to two decimal places is: ${piRounded}`);


