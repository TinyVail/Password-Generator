// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

//Listing the nums and characters arrays

var specialCharacters = "%!&,*-+./<>?~";
var numbers = "0123456789";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// declare the future variables i'll use
var confirmLength = "";
var confirmspecialCharacters;
var confirmalphaLower;
var confirmalphaUpper;
var confirmNumbers;


// using the preset function to generate password with prompt for characters, nums, specials etc...

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in you password?"));

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Your Password must be between 8-128 characters!");
    var confirmLength = (prompt("How many characters would you like in you password?"));
  }

  alert(`Your password will have ${confirmLength} characters`);

  // ask them what they would like to include in their password

  var confirmspecialCharacters = confirm("Click OK if you want to include special characters");
  var confirmNumbers = confirm("Click OK if you would like to include numbers");
  var confirmalphaLower = confirm("Click OK if you would like to include lowercase letters");
  var confirmalphaUpper = confirm("Click OK if you would like to include uppercase letters");

  while(confirmspecialCharacters === false && confirmNumbers === false && confirmalphaLower === false && confirmalphaUpper === false) {
    alert("You must choose at least one addition to your password! Try again please!");
    var confirmspecialCharacters = confirm("Click OK if you want to include special characters");
    var confirmNumbers = confirm("Click OK if you would like to include numbers");
    var confirmalphaLower = confirm("Click OK if you would like to include lowercase letters");
    var confirmalphaUpper = confirm("Click OK if you would like to include uppercase letters");
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
