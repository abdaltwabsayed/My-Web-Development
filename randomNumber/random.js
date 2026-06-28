//Random Number Generator

const rollButton = document.getElementById("rollButton");
const randomNumberLabel1 = document.getElementById("randomNumberLabel1");
const randomNumberLabel2 = document.getElementById("randomNumberLabel2");
const randomNumberLabel3 = document.getElementById("randomNumberLabel3");
const min = 1;
const max = 100;
let randomNumber;

rollButton.onclick = function(){
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumberLabel1.textContent = randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumberLabel2.textContent = randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumberLabel3.textContent = randomNumber;
}