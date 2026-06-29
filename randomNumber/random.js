//Random Number Generator

const rollButton = document.getElementById("rollButton");
const randomNumberLabel1 = document.getElementById("randomNumberLabel1");
const randomNumberLabel2 = document.getElementById("randomNumberLabel2");
const randomNumberLabel3 = document.getElementById("randomNumberLabel3");
const result = document.getElementById("result");
const min = 1;
const max = 100;
let randomNumber1;
let randomNumber2;
let randomNumber3;
let guess;
let running = true;

while(running){
    guess = Number(window.prompt(`Guess a number between ${max} and ${min}.`));
    if(!guess || isNaN(guess) || guess < min || guess > max){
        continue;
    }
    running = false;
}

rollButton.onclick = function(){
    randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumberLabel1.textContent = randomNumber1;
    randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumberLabel2.textContent = randomNumber2;
    randomNumber3 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumberLabel3.textContent = randomNumber3;
    if(guess == randomNumber1 || guess == randomNumber2 || guess == randomNumber3){
        result.textContent = `Your guess ${guess} was correct!`;
        result.style.backgroundColor = "green"; 
    }
    else {
        result.textContent = `Your guess ${guess} was incorrect!`;
        result.style.backgroundColor = "red"; 
    }
}
