//Assignment Code + Event Listener to prompt questions when button pushed
var generateBtn = document.querySelector("#generate");

// Character Arrays 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "%", "$", "&", ",", "*", "+", "-", ":", ";", ".", "/", "<", ">", "?","~"];


// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters they would in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like the password to contain?"));

  // Loop if password <=8 || >=128
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like the password to contain?"));
      } 

    // Determine parameters of password
    var confirmLowerCase = confirm("Click OK  to include lowercase characters");
    var confirmUpperCase = confirm("Click OK  to include uppercase characters");
    var confirmNumericCharacter = confirm("Click OK to include numeric characters");
    var confirmSpecialCharacter = confirm("Click OK to include special characters");
      // Loop if none are selected 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmLowerCase = confirm("Click OK  to include lowercase characters");
        var confirmUpperCase = confirm("Click OK  to include uppercase characters"); 
        var confirmNumericCharacter = confirm("Click OK to include numeric characters");
        var confirmSpecialCharacter = confirm("Click OK to include special characters");
    } 

          // Assign an action to the password parameters
          var passwordCharacters = []
      
          if (confirmLowerCase) {
            passwordCharacters = passwordCharacters.concat(lowerCase)
          }
          if (confirmUpperCase) {
            passwordCharacters = passwordCharacters.concat(upperCase)
          }
          if (confirmSpecialCharacter) {
            passwordCharacters = passwordCharacters.concat(specialChar)
          }
          if (confirmNumericCharacter) {
            passwordCharacters = passwordCharacters.concat(number)
          }
          
          console.log(passwordCharacters)
    
          // Empty string to be filled based on for loop selecting random characters from the array
          var randomPassword = ""
          
          for (var i = 0; i < confirmLength; i++) {
            randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
            console.log(randomPassword)
          }
          return randomPassword;
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener or generate button
generateBtn.addEventListener("click", writePassword);
