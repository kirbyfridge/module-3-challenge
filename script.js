// Assignment code here

// generatePassword is the function that creates the password
function generatePassword() {

// Characters available to use within our generated passwords
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var availableChar = "";

// Prompt will pop up & ask for a maximum password length desired
    var inputWin = window.prompt("Input your desired max password length (between 8 - 128)");
    var max = parseInt(inputWin);

// If the length the user input is below 8 or above 128, alert user to put another number then returns
    if (max < 8 || max > 128) {
        window.alert("Password must be between 8-128 characters long");
        return;
    }

// If it is not a number, it will alert user to input number then returns
    if (isNaN(max)) {
        window.alert("Please input a numberical value");
        return;
    }

// Prompt will pop up & ask for a minimum password length desired
    var inputWin = window.prompt("Input your desired min password length (between 8 - 128)");
    var min = parseInt(inputWin);

// If the length the user input is below 8 or above 128, alert user to put another number then returns
    if (min < 8 || min > 128) {
        window.alert("Password must be between 8-128 characters long");
        return;
    }

// If it is not a number, it will alert user to input number then returns
    if (isNaN(min)) {
        window.alert("Please input a numberical value");
        return;
    }

// Prompts that ask user if they would like to include lowercase, uppercase, numbers and/or symbols in their password 
// then if true, concatenates all desired characters into one string
    var confirmLower = window.confirm("Include lowercase letters?"); 
        if (confirmLower === true) {
            availableChar = availableChar.concat(lower);
        };

    var confirmUpper = window.confirm("Include uppercase letters?");
        if (confirmUpper === true) {
            availableChar = availableChar.concat(upper);
        };

    var confirmNumber = window.confirm("Include numbers?");
        if (confirmNumber === true) {
            availableChar = availableChar.concat(number);
        };

    var confirmSymbol = window.confirm("Include symbols?");
        if (confirmSymbol === true) {
            availableChar = availableChar.concat(symbol);
        };

// Creating random number using the max & min that the user has set within prompts
    var passLength = Math.floor(Math.random() * (max - min + 1)) + min;

// Makes an array using the randomized password length created using max & min, 
// Fills it with elements within the string of available characters, 
// Maps out function randomChar, which also creates a random number for each element in array
// Return array as string that is readable as a password
    var passCreate = Array(passLength).fill(availableChar).map(function(randomChar) 
    { return randomChar[Math.floor(Math.random() * randomChar.length)] }).join("");
    
// Returns newly created password
    return passCreate;
}


// Get references to the #generate element
// This is the button from the index
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// When pressing button, it will writePassword
// What must be done is function generatePassword 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);