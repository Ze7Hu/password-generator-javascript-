// Assignment Code
var generateBtn = document.querySelector("#generate");

  // Adding event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generating the password

function generatePassword () {

  var passwordLength = Number (  window.prompt ('what is the lenght of your password?')) 
  
// Input validation

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Choose a number between 8 and 128.");
    return;
  }

// promoting for password criteria

  var userWantsNumbers = window.confirm ('Use numbers?')
  var userWantsSymbols = window.confirm ('Use symbols?')
  var userWantsUppercase = window.confirm ('Use Uppercase letters?')
  var userWantsLowercase = window.confirm ('Use lowercase letters?')
  

var numbersList =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbolsList = ['!', '@', '£', '$', '%', '_']
var uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


 // Character type validation -  select a minimun of one 
var optionsCart = [];

if (userWantsNumbers === true){
  optionsCart = optionsCart.concat(numbersList)
}

if (userWantsSymbols === true) {
  optionsCart = optionsCart.concat(symbolsList)
}

if (userWantsUppercase === true ) {
  optionsCart = optionsCart.concat (uppercaseList)
}

if (userWantsLowercase === true ) {
  optionsCart = optionsCart.concat (lowercaseList)
}

if (userWantsNumbers === false && userWantsSymbols === false && userWantsUppercase === false && userWantsLowercase === false){

alert("select a minimum of one option")
}

console.log(optionsCart) 



// Choosing a random selection of characters 

var generatedPassword = ""

for (var i = 0, n = optionsCart.length; i <parseInt(passwordLength); i++){
  generatedPassword += optionsCart[Math.floor(Math.random() *n )];
}
return generatedPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log(password)
}