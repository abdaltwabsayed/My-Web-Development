
const decrementButton = document.getElementById("decrementButton");
const incrementButton = document.getElementById("incrementButton");
const resetButton = document.getElementById("resetButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

decrementButton.onclick = function() {
  count--;
  countLabel.textContent = count;
}

incrementButton.onclick = function() {
  count++;
  countLabel.textContent = count;
}

resetButton.onclick = function() {
  count = 0;
  countLabel.textContent = count;
}