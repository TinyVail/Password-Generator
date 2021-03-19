// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

//Listing the nums and characters arrays

var specialCharacters = ["%", "!", "&", ",", "*", "-", "+", ".", "/", "<", ">", "?","~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// declare the future variables i'll use
var confirmLength = "";
var confirmspecialCharacters;
var confirmalphaLower;
var confirmalphaUpper;
var confirmNumbers;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
