// Creating Array
var specialcharacter = [
  '~', '`', '!','@', '#', '$','%','^','&','*','(',')','-','=','+','{','}','[',']',':',';','\\','?','/','<','>'
];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','X'];

// Creating Conditions
function getOptions() {
 var length = parseInt (
   prompt('How many characters do you want your password to have?')
 );

// Conditions to check if the length is valid
if (isNaN(length) === true) {
  alert("No a number. Please enter a number.");
  return;
}
if (length < 8) {
  alert("Cannot be less than 8 characters. Please enter again.");
  return;
}
if (length >= 20) {
  alert("Cannot be more than 20 characters. Please enter again.");
  return;
};

// Conditions for types of Characters
var haspecialcharacter = confirm ('Click OK to confirm if you would like to have special character in your password.');

var hasnumber = confirm('Click OK to confirm if you would like numbers in your password.');

var haslowercase = confirm('Click OK to confirm if you would like lower case letters in your password.');

var hasuppercase = confirm('Click OK to confirm if you would like to have upper case letters in your password.');

// if all types of conditions are rejected

if (
  haspecialcharacter === false &&
  hasnumber === false &&
  haslowercase === false &&
  hasuppercase === false
  ) {
 alert ("Please choose a type of condition!");
 return;
}

// Store user input
var passwordOptions = {
  length: length,
  haspecialcharacter:haspecialcharacter,
  haslowercase:haslowercase,
  hasnumber:hasnumber,
  hasuppercase:hasuppercase
};
return passwordOptions;
}

//Store Random input
function genRandom(ar) {
      randomchars = Math.floor(Math.random() * ar.length);
      randomEl = ar[randomchars];
  
  return randomEl;
}

// Generate password by user's choices
function generatePassword() {
  var options = getOptions();
  var result = [];
  var possibleOutcome = [];
  var definiteOuntcome = [];

 // Conditions if users want to have special characters in their passowrds
  if (options.haspecialcharacter) {
    possibleOutcome = possibleOutcome.concat(specialcharacter);
    definiteOuntcome.push(genRandom(specialcharacter));
  }

  // Conditions if users want to have numbers in their passowrds
  if (options.hasnumber) {
    possibleOutcome = possibleOutcome.concat(number);
    definiteOuntcome.push(genRandom(number));
  }

  // Conditions if users want to have lower case letters in their passowrds
  if (options.haslowercase) {
    possibleOutcome = possibleOutcome.concat(lowercase);
    definiteOuntcome.push(genRandom(lowercase));
  }

  // Conditions if users want to have upper case characters in their passowrds
  if (options.hasuppercase) {
    possibleOutcome = possibleOutcome.concat(uppercase);
    definiteOuntcome.push(genRandom(uppercase));
  }

  // Generate Passwords with conditions applied
  for (var i = 0; i < options.length;i++) {
    var possibleOutcome = genRandom(possibleOutcome);
    result.push(possibleOutcome);
  }
  for (var i = 0; i < definiteOuntcome.length;i++) {
    result[i] = definiteOuntcome[i];
  }
  return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

