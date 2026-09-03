

let dayNumber = parseInt(window.prompt("Please enter the day number in the week (1-7):"));

if (dayNumber < 1 || dayNumber > 7) {
    dayNumber = parseInt(window.prompt("Invalid input. Please enter a day number in the week (1-7):"));
}

// Get the day name using switch statements
let dayName;
switch (dayNumber) {
    case 1:
        dayName = "Saturday";
        break;
    case 2:
        dayName = "Sunday";
        break;
    case 3:
        dayName = "Monday";
        break;
    case 4:
        dayName = "Tuesday";
        break;
    case 5:
        dayName = "Wednesday";
        break;
    case 6:
        dayName = "Thursday";
        break;
    case 7:
        dayName = "Friday";
        break;
}
window.alert("The day is: " + dayName);

// Identify the weekend or weekday using switch statements
let dayType;
switch (dayNumber) {
    case 6:
    case 7:
        dayType = "weekend";
        break;
    default:
        dayType = "weekday";
}
window.alert("Switch says: This is a " + dayType);

// weekend function
function isWeekend(dayNumber) {
    return (dayNumber === 6 || dayNumber === 7)? true : false;
}
window.alert(`Function says: This is ${isWeekend(dayNumber)} a weekend`);