// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//random Method to generate random numbers for characters
var randomNumber = function(min, max) {
  var number = (Math.random() * (max - min) + min);
  return number;
}

//funtion to determine the number of characters to include in the generated password
var characterLength = function() {
  //prompting the user
  var no_chars = window.prompt("Password Length: ");
  no_chars = parseInt(no_chars);
  if (no_chars < 8 || no_chars > 128 || !no_chars){
    window.alert("Length requirements NOT met.  \nPassword Length MUST be at least 8 characters, but NO MORE than 128.\nPlease Enter a valid number.");
    characterLength();
  }
  return no_chars;
}

//function to prompt user to select if they wish to include lowercase letters
var  charSelection = function() {
  //prompting the user
  var choice = window.prompt("Please select password criteria:" +
  "\nLowercase Characters: ENTER 1" +
  "\nUppercase Characters: ENTER 2" +
  "\nSpecial Characters: ENTER 3");

  choice = parseInt(choice);

  //check for valid response
  if (choice === 1){    
    var min = 97;
    var max = 122;
    return generateCharacter(min, max);
  }
  else if ( choice == 2){
    var min = 65;
    var max = 90;
    return generateCharacter(min, max);    
  }
  else if (choice === 3){
    var min = 33;
    var max = 47;
    return generateCharacter(min, max);
  }
  else { //Invalid response, continue to prompt user until a valid response is entereed
    window.alert("Invalid Input!\nENTER 1 for YES OR\nENTER 2 for NO");
    charSelection();
  }
}

//function that generates character
var generateCharacter = function(min, max) {
  var min = 97;
  var max = 122;
  var character = randomNumber(min, max); 
  character = String.fromCharCode(character);    
  return character;
};

//function that calls charSelection() based on user character request, and returns password
var generatePassword = function() {
  var count = characterLength();
  var generatedPassword = "";
  while (count != 0) {
    generatedPassword += generateCharacter();
    count --;
  }
  return generatedPassword;  
}

writePassword();