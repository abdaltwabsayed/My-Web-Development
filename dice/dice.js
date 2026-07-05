// Dice Roller Program

function rollDice(){
    const numberOfDices = document.getElementById("diceNumber").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = []

    for (let i = 0; i < numberOfDices; i++) {
        const random = Math.floor(Math.random() * 6) + 1;
        values.push(random);
        images.push(`<img src="../assets/${"Dice-" + random}.png" alt="Dice ${random}">`);
    }
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}