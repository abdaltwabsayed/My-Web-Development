//  Temperature degrees conversion

const numberInput = Number(document.getElementById("numberInput"));
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temperature;

function convert() {
    if (!numberInput) {
        result.textContent = "Please enter a temperature value.";
    } else if (toCelsius.checked) {
        temperature = (numberInput - 32) * 5/9;
        result.textContent = `${numberInput}°F is equal to ${temperature.toFixed(2)}°C`;
    } else if (toFahrenheit.checked) {
        temperature = (numberInput * 9/5) + 32;
        result.textContent = `${numberInput}°C is equal to ${temperature.toFixed(2)}°F`;
    } else {
        result.textContent = "Please select a conversion option.";
    }
}