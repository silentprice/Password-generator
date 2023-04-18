// Assignment Code
var generateBtn = document.querySelector("#generate");

// function generatePassword() {
//   var numberOfCharacters = prompt("How many characters in the password?");
//   var includesSpecialCharacters = confirm("Do you want special characters?");

//   var charset =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
//   var password = "";
//   for (var i = 0; i < length; i++) {
//     var randomIndex = Math.floor(math.random() * charset.length);
//     password += charset[randomIndex];
//   }
//   return password;
// }
// broke down the characters individually incase user does not want one applied
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  var pw = "";
  var tempChars = "";

  var numberOfCharacters = prompt("How many characters in the password?");
  while (
    numberOfCharacters < 8 ||
    numberOfCharacters > 128 ||
    isNaN(numberOfCharacters)
  ) {
    alert("Your password must be a number between 8 and 128 characters long");
    numberOfCharacters = prompt("How many characters in the password?");
  }

  var wantsUpper = confirm("Would you like uppercase?");
  if (wantsUpper) {
    tempChars += uppercase;
  }
  console.log(tempChars);

  var wantsLower = confirm("Would you like lowercase?");
  if (wantsLower) {
    tempChars += lowercase;
  }
  console.log(tempChars);

  var wantsNumbers = confirm("Would you like numbers?");
  if (wantsNumbers) {
    tempChars += numbers;
  }
  console.log(tempChars);

  var wantsSpecial = confirm("Would you like special characters?");
  if (wantsSpecial) {
    tempChars += specials;
  }
  console.log(tempChars);

  while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert("You must choose at least one type of character");
    wantsUpper = confirm("Would you like uppercase?");
    if (wantsUpper) {
      tempChars += uppercase;
    }
    console.log(tempChars);

    wantsLower = confirm("Would you like lowercase?");
    if (wantsLower) {
      tempChars += lowercase;
    }
    console.log(tempChars);

    wantsNumbers = confirm("Would you like numbers?");
    if (wantsNumbers) {
      tempChars += numbers;
    }
    console.log(tempChars);

    wantsSpecial = confirm("Would you like special characters?");
    if (wantsSpecial) {
      tempChars += specials;
    }
    console.log(tempChars);
  }

  for (var i = 0; i < numberOfCharacters; i++) {
    pw += tempChars.charAt(Math.floor(Math.random() * tempChars.length))
  }

  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// teach tips...
