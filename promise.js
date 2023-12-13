const userInput = prompt("Enter a year:");

// Convert the user input to a number
const yearToCheck = parseInt(userInput);

// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Check if the entered year is a leap year
if (!isNaN(yearToCheck)) {
    if (isLeapYear(yearToCheck)) {
        console.log(`${yearToCheck} is a leap year.`);
    } else {
        console.log(`${yearToCheck} is not a leap year.`);
    }
} else {
    console.log("Please enter a valid year.");
}