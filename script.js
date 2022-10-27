// Assignment code here

// generatePassword is the function that creates the password
function generatePassword() {
// Defining max & min so length does not exceed
    var max = 128;
    var min = 8;

// Characters available to use within our generated passwords
    var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Creating random number using the max * min to be the length of the password
    var randomLength = Math.floor(Math.random() * (max - min + 1)) + min;

// Makes an array using randomLength, 
// Fills it with elements within the string char, 
// Maps out function randomChar, which also creates a random number for each element in array
// Return array as string that is readable as a password
    var passCreate = Array(randomLength).fill(char).map(function(randomChar) 
    { return randomChar[Math.floor(Math.random() * randomChar.length)] }).join('');
    
// returns newly created password
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