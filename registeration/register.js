let firstName = window.prompt("first-name");
let lastName = window.prompt("last-name");
let fullName = firstName + lastName;
const email =  window.prompt("email");
const password = window.prompt("new-password");
const confirmPassword = window.prompt("confirm-password");
const age = window.prompt("age");
var country = window.prompt("country");
var gender = window.prompt("gender");
var picture = window.prompt("profile-picture");
var interests = window.prompt("interests");
var emailCheck = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|fayoum)\.com$/;
function submission(){
    if (firstName.textContent.length < 2 || lastName.textContent.length < 2){
        window.alert("You must enter a valid name!");
    }
    if (!emailCheck.test(email)) {
        window.alert("You must enter a valid email!");
    }
    if (password.textContent != confirmPassword.textContent) {
        window.alert("The confirmation does't match!");
    }
}
let day = window.prompt("Enter a day");
 switch (day) {
    case "Friday" || "Saturday":
        console.log("weekend");
        break;
    default:
        console.log("Not a weekend");
        
 }