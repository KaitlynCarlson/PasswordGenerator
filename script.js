
 


/** Prompting user to input desirable password character length. Limited to a minimum of 8 characters 
 and a maximum of 128 characters. */

var yourPasswordLength = prompt('Your password can be between 8 and 128 characters. What length do you require?');

if (yourPasswordLength >= 8 && yourPasswordLength <= 128) {
    alert(yourPasswordLength +  ' characters');

}
else if (yourPasswordLength < 8 || yourPasswordLength > 128) {
    alert('Invalid. The password must be between 8 and 128 characters.');
}

// Prompting user to confirm the mixture of password characters

var yourPasswordSpecialCharacters = confirm('Would you like special characters in your generated password?');
var yourPasswordNumericCharacters = confirm('Would you like numeric characters in your generated password?');
var yourPasswordUpperCaseCharacters = confirm('Would you like upper case characters in your generated password?');
var yourPasswordLowerCaseCharacters = confirm('Would you like lower case characters in your password?');

console.log(yourPasswordLength);
console.log(yourPasswordNumericCharacters);
console.log(yourPasswordSpecialCharacters);
console.log(yourPasswordUpperCaseCharacters);
console.log(yourPasswordLowerCaseCharacters);


// Variables available to randomly chose from within the user selected parameters


var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseCharacters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var upperCaseCharacters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var specialCharacters = ["!", "@","#", "$"," %"," ^", " &"," *", " _", " + "];
var password = "";
var generator = [];


if (yourPasswordSpecialCharacters === true){
   generator = generator.concat(specialCharacters);
    console.log(generator);
}

if (yourPasswordNumericCharacters === true) {
     generator = generator.concat(numericCharacters);
    console.log(generator);
}
if (yourPasswordUpperCaseCharacters === true) {
    generator = generator.concat(upperCaseCharacters);
    console.log(generator);
}
if (yourPasswordLowerCaseCharacters === true) {
    generator = generator.concat(lowerCaseCharacters);
    console.log(generator);
}


/** I want to create a function that utilizes the compiled generator array, as contextualized in the above if statements, 
 * to produce an output selected at random from 
 * the generator array that is also the same length as the yourPasswordLength value
 * 
 * I did this by creating a function called myFunction, and within this function I ran a "for loop". 
 * The for loop runs over the blocks of code located within its {}, all of which is located within the myFunction{}.
 * The for loop declares that the variable index begins at 0. The condition declares that the index will be less than the
 * value of yourPasswordLength, and that the index will continue to move through the array. 
 * 
 * 
 */
    function myFunction(){
        for (var i = 0; i < yourPasswordLength; i++){
        password = password + generator[Math.floor(Math.random() * generator.length)];
        }
    }
    
    myFunction()
    console.log(password);