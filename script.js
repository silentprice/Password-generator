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

function generatePassword() {
  var pw = ""

  var numberOfCharacters = prompt("How many characters in the password?");
  while(numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    alert("Your password must be a number between 8 and 128 characters long")
    numberOfCharacters = prompt("How many characters in the password?");
  }

  return pw
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
