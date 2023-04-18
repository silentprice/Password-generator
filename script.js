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

// broke down the characters individually incase user does not want one applied to password
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
// create a function that  generates a password based on the users answers to the questions
function generatePassword() {
  var pw = "";
  var tempChars = "";
// afer user clicks generate password the first prompt will ask how many character in the password if they select a number lower than 8 or higher than 128 it will re ask the question
  var numberOfCharacters = prompt("How many characters in the password?");
  while (
    numberOfCharacters < 8 ||
    numberOfCharacters > 128 ||
    isNaN(numberOfCharacters)
  ) {
    alert("Your password must be a number between 8 and 128 characters long");
    numberOfCharacters = prompt("How many characters in the password?");
  }
// next prompt will ask if user would like to use uppercase characters
  var wantsUpper = confirm("Would you like uppercase?");
  if (wantsUpper) {
    tempChars += uppercase;
  }
  console.log(tempChars);
// the third prompt will ask if user would like lowercase characters
  var wantsLower = confirm("Would you like lowercase?");
  if (wantsLower) {
    tempChars += lowercase;
  }
  console.log(tempChars);
// the fourth prompt will ask user if they would like to use numbers
  var wantsNumbers = confirm("Would you like numbers?");
  if (wantsNumbers) {
    tempChars += numbers;
  }
  console.log(tempChars);
// the last prompt shall ask if they want to use special characters 
  var wantsSpecial = confirm("Would you like special characters?");
  if (wantsSpecial) {
    tempChars += specials;
  }
  console.log(tempChars);
// create while loop so user must answer atleast one of the following prompts so password can be generated
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
