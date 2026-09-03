

let grade = parseInt(window.prompt("Please enter your grade (0-100):"));

// Calculate the grade using if-else statements
if (grade >= 90 && grade <= 100) {
    window.alert("Your grade is A");
} else if (grade >= 80 && grade < 90) {
    window.alert("Your grade is B");
} else if (grade >= 70 && grade < 80) {
    window.alert("Your grade is C");
} else if (grade >= 60 && grade < 70) {
    window.alert("Your grade is D");
} else {
    window.alert("Your grade is F");
}

// Calculate the grade using switch statement
switch (true) {
    case (grade >= 90 && grade <= 100):
        window.alert("Your grade is A");
        break;
    case (grade >= 80 && grade < 90):
        window.alert("Your grade is B");
        break;
    case (grade >= 70 && grade < 80):
        window.alert("Your grade is C");
        break;
    case (grade >= 60 && grade < 70):
        window.alert("Your grade is D");
        break;
    default:
        window.alert("Your grade is F");
}

// One line version using ternary operator
let gradeMessage = (grade >= 90 && grade <= 100) ? "Your grade is A" :
    (grade >= 80 && grade < 90) ? "Your grade is B" :
    (grade >= 70 && grade < 80) ? "Your grade is C" :
    (grade >= 60 && grade < 70) ? "Your grade is D" :
    "Your grade is F"; 
window.alert(gradeMessage);

// Pass-Fail check
let passFailMessage = (grade >= 60) ? "You passed the course!" : "You failed the course.";
window.alert(passFailMessage);