//  Temperature degrees conversion

const numberInput = document.getElementById("numberInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temperature;

function convert() {
    const inputValue = Number(numberInput.value);

    if (numberInput.value.trim() === "" || Number.isNaN(inputValue)) {
        result.textContent = "Please enter a temperature value.";
    } else if (toCelsius.checked) {
        temperature = (inputValue - 32) * 5 / 9;
        result.textContent = `${inputValue}°F is equal to ${temperature.toFixed(2)}°C`;
    } else if (toFahrenheit.checked) {
        temperature = (inputValue * 9 / 5) + 32;
        result.textContent = `${inputValue}°C is equal to ${temperature.toFixed(2)}°F`;
    } else {
        result.textContent = "Please select a conversion option.";
    }
}