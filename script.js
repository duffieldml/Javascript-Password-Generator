// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of available choices for creating passwords
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", ")", "(", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[", "^", "_", ".", "}", "{", "|", "~", "`"];

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function for generating the Password
function generatePassword() {

  
  //Establishing variables to use in function
  var passwordLength;
  var passwordLower;
  var passwordUpper;
  var passwordNumber;
  var passwordSpecial;
  var passwordChoices;

  //User defines password length
  var passwordLength = prompt("Specify a password length between 8 and 128 characters!");

  //If the user does not pick a number between 8 and 128, this is the message they receive
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password length must be between 8 and 128 characters!");

  } else if (isNaN(passwordLength)) {
    alert("You must specify a number between 8 and 128!");
 
  } else {

    // Asking for user input on lowercase letters
    passwordLower = confirm("Do you want your password to contain lowercase letters?");

    //Asking for user input on uppercase letters
    passwordUpper = confirm("Do you want your password to contain uppercase letters?");

    //Asking for user input on numbers
    passwordNumber = confirm("Do you want your password to contain numbers?")

    // Asking for user input on special characters
    passwordSpecial = confirm("Do you want your password to contain special characters?")
  };

  // If the user picks every criteria 
  if (passwordLower && passwordUpper && passwordNumber && passwordSpecial) {
    passwordChoices = lowerCase.concat(upperCase, numbers, special);   

  // If the user picks 3 of the 4 criteria
  } else if (passwordLower && passwordUpper && passwordSpecial) {
    passwordChoices = lowerCase.concat(special, upperCase);

  } else if (passwordLower && passwordNumber && passwordSpecial) {
    passwordChoices = numbers.concat(lowerCase, special);

  } else if (passwordLower && passwordUpper && passwordNumber) {
    passwordChoices = upperCase.concat(lowerCase, numbers);  

  } else if (passwordUpper && passwordNumber && passwordSpecial) {
    passwordChoices = upperCase.concat(numbers, special);    

    // If the user picks 2 of the 4 criteria
  } else if (passwordLower && passwordUpper) {
    passwordChoices = upperCase.concat(lowerCase);

  } else if (passwordLower && passwordSpecial) {
    passwordChoices = special.concat(lowerCase);

  } else if (passwordUpper && passwordSpecial) {
    passwordChoices = special.concat(upperCase);

  } else if (passwordNumber && passwordSpecial) {
    passwordChoices = special.concat(numbers);

  } else if (passwordLower && passwordNumber) {
    passwordChoices = numbers.concat(lowerCase);    

  } else if (passwordUpper && passwordNumber) {
    passwordChoices = numbers.concat(upperCase);    

  // If the user picks 1 of the 4 criteria
  } else if (passwordUpper) {
    passwordChoices = upperCase;

  } else if (passwordNumber) {
    passwordChoices = numbers;

  } else if (passwordLower) {
    passwordChoices = lowerCase;

  } else if (passwordSpecial) {
    passwordChoices = special;    
        
  };

  //Placeholder for generating password
  var passwordHolder = [];

  //Loop for generating the password
  for (var i = 0; i < passwordLength; i++) {
    var Choices = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    passwordHolder.push(Choices);
  }

  // This connects and inputs the password into the placeholder
  var password = passwordHolder.join("");
  return password;
}