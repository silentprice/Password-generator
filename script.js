// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword(length) {
  var password = generatePassword(8);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
