// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

//Listing the nums and characters arrays

var specialCharacters = "%!&,*-+./<>?~";
var numbers = "0123456789";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

  //if they dont choose anything display an error message

  while (confirmspecialCharacters === false && confirmNumbers === false && confirmalphaLower === false && confirmalphaUpper === false) {
    alert("You must choose at least one addition to your password! Try again please!");
    var confirmspecialCharacters = confirm("Click OK if you want to include special characters");
    var confirmNumbers = confirm("Click OK if you would like to include numbers");
    var confirmalphaLower = confirm("Click OK if you would like to include lowercase letters");
    var confirmalphaUpper = confirm("Click OK if you would like to include uppercase letters");
  }

  // adding the chosen parameters to the password
  var passwordContent = "";

  if (confirmNumbers) {
    passwordContent = passwordContent + numbers;
    // passwordContent += numbers;
  }

  if (confirmspecialCharacters) {
    passwordContent = passwordContent + specialCharacters;
  }

  if (confirmalphaLower) {
    passwordContent = passwordContent + alphaLower;
  }

  if (confirmalphaUpper) {
    passwordContent = passwordContent + alphaUpper;
  }

  var createdPassword = createpassword(passwordContent, confirmLength);

  return createdPassword;
}

// function functionName(functionArg1, functionArg2) {

// }

function createpassword(passwordContent, confirmLength) {
  var password = "";
  var index;

  for (var counter = 0; counter < confirmLength; counter++) {
    var index = Math.floor(Math.random() * passwordContent.length);
    var randomizedChar = passwordContent.charAt(index);
    password = password + randomizedChar;
  }
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
