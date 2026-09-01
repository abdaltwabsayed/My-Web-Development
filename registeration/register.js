let firstName;
let lastName;
let email;
let password;
let confirmPassword;
let age;
var country;
var gender;
const EMAIL_CHECK = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|fayoum)\.com$/;
const PASSWORD_CHECK = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const COUNTRIES = ["Egypt", "Saudi Arabia", "Kuwait", "Qatar", "Emirates", "Morocco", "Algeria", "Tunisia", "Jordan", "Lebanon", "Syria", "Iraq"];


// Get first and last name
while (!firstName || firstName.length < 3 || firstName.startsWith(/^[0-9]/)){
    firstName = window.prompt("Enter Your First Name:");
    firstName = firstName.trim().toLocaleLowerCase();
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
while (!lastName || lastName.length < 3 || lastName.startsWith(/^[0-9]/)){
    lastName = window.prompt("Enter Your Last Name:");
    lastName = lastName.trim().toLocaleLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
}

let fullName = firstName + " " + lastName;  // Now they have values

// Get valid email
while (!email || !EMAIL_CHECK.test(email)) {
    email = window.prompt("Enter Your Email:");
}

// Create password
while (!password || !PASSWORD_CHECK.test(password)) {
    password = window.prompt("Create a New Password:\n(Min 8 chars with 1 digit and 1 special char: @$!%*?&)");
}

// Confirm password
while (!confirmPassword || password !== confirmPassword) {
    confirmPassword = window.prompt("Confirm the Password:");
}

// Get a valid age
while (!age || typeof(age) != "number" || age < 10 || age > 100) {
    age = parseInt(window.prompt("Input your age (years):"));
}

// Get an arabic country
while (!COUNTRIES.includes(country)) {
    country = window.prompt("Enter an Arabic Country:");
}

while (gender !== "female" && gender !== "male"){
    gender = window.prompt("Gender:");
    gender = gender.toLocaleLowerCase().trim();
}

let newHeading = document.createElement("h1");
newHeading.textContent = `Full Name: ${fullName}`;
document.body.appendChild(newHeading);
newHeading = document.createElement("h1");
newHeading.textContent = `Email: ${email}`;
document.body.appendChild(newHeading);
newHeading = document.createElement("h1");
newHeading.textContent = `Password: ${password}`;
document.body.appendChild(newHeading);
newHeading = document.createElement("h1");
newHeading.textContent = `Age: ${age}`;
document.body.appendChild(newHeading);
newHeading = document.createElement("h1");
newHeading.textContent = `Arabic Country: ${country}`;
document.body.appendChild(newHeading);
newHeading = document.createElement("h1");
newHeading.textContent = `Gender: ${gender}`;
document.body.appendChild(newHeading);

document.body.style.textAlign = "center";