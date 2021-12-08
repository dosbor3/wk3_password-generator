// Assignment code here
var Password = "";





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

//criteriaSelection will be the root function, and based on user input call the other functions 
var criteriaSelection = function() {
  //calling the characterLength() to determine number of characters to include in password generation
  //and storing the return value in the passwordLength variable
  var passwordLength = characterLength();

  //create a loop to generate total number of requested characters from user
  for (var i = 0; i < passwordLength; i++) {

  }
  
}
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
  if (no_chars < 8 || no_chars > 128){
    window.alert("Length requirements NOT met.  \nPassword Length MUST be at least 8 characters, but NO MORE than 128.\nPlease Enter a valid number.");
    characterLength();
  }
  return no_chars;
}

//function to prompt user to select if they wish to include lowercase letters
var  lowercaseSelection = function() {
  //prompting the user
  var choice = window.prompt("Include Lowercase Characters: \nEnter 1 for YES\nEnter 2 for NO");
  choice = parseInt(choice);

  //check for valid response
  if (choice === 1){
    //randomly generate a lowercase letter number range: 97 - 122
    var lowercaseChar = randomNumber(97, 122); 
    lowercaseChar = String.fromCharCode(lowercaseChar);
    
    //window.alert(lowercaseChar);

    return lowercaseChar;

  }
  else if (choice === 2){
    //Do NOTHING    
  }
  else { //Invalid response, continue to prompt user until a valid response is entereed
    window.alert("Invalid Input!\nENTER 1 for YES OR\nENTER 2 for NO");
    lowercaseSelection();
  }
}

//function to prompt user to select if they wish to include uppercase letters
var  uppercaseSelection = function() {
  //prompting the user
  var choice = window.prompt("Include Uppercase Characters: \nEnter 1 for YES\nEnter 2 for NO");
  choice = parseInt(choice);

  //check for valid response
  if (choice === 1){
    //randomly generate a uppercase letter number range: 65 - 90
    var uppercaseChar = randomNumber(65, 90); 
    uppercaseChar = String.fromCharCode(uppercaseChar);
    
    window.alert(uppercaseChar);
    
    return uppercaseChar;

  }
  else if (choice === 2){
    //Do NOTHING    
  }
  else { //Invalid response, continue to prompt user until a valid response is entereed
    window.alert("Invalid Input!\nENTER 1 for YES OR\nENTER 2 for NO");
    uppercaseSelection();
  }
}



//function that prompts user to select if they wish to include uppercase letters

var writePassword = function() {
  var test = characterLength();
  lowercaseSelection();
  uppercaseSelection();
}

writePassword();