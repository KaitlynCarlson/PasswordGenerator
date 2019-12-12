
 
function passwordGenerator(){

/** Prompting user to input desirable password character length. Limited to a minimum of 8 characters 
 and a maximum of 128 characters. */

var yourPasswordLength = prompt('Your password can be between 8 and 128 characters. What length do you require?');

for (var  i = yourPasswordLength; yourPasswordLength < 8 || yourPasswordLength > 128; yourPasswordLength = prompt('Your password can be between 8 and 128 characters. What length do you require?')){
    alert('You have not met the password criteria');

}

while (yourPasswordLength !== parseInt(yourPasswordLength, 10).toString()) {
    alert("Invalid input: Not a number");
    yourPasswordLength= prompt("Your password can be between 8 and 128 characters. What length do you require?");
    for (var  i = yourPasswordLength; yourPasswordLength < 8 || yourPasswordLength > 128; yourPasswordLength = prompt('Your password can be between 8 and 128 characters. What length do you require?')){
        alert('You have not met the password criteria');
    
    }
}


alert(yourPasswordLength + " characters");


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
var specialCharacters = ["!", "@","#", "$","%","^", "&","*", "_", "+"];
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
else if (yourPasswordLowerCaseCharacters === false && yourPasswordUpperCaseCharacters === false && yourPasswordNumericCharacters === false && yourPasswordSpecialCharacters === false) {
    alert ('You must select at least one character type to generate your random password');
    return;
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
 * The argument states that the password will be equal to the password, which is an empty string, plus the generator values, 
 * selected at random from the full length of the generator. 
 * 
 * 
 */
    function myFunction(){
        for (var i = 0; i < yourPasswordLength; i++){
        password = password + generator[Math.floor(Math.random() * generator.length)];
        }
    }
    
//This section calls on myFunction, grabs the input field with an id of 'display', and tells the browser to render the value
//of password in the HTML input field
    myFunction()
    document.getElementById('display').value = password;
}


// Copy to clipboard function
    function copyPassword(){
        var copy= document.getElementById('display');
        copy.select();
        copy.setSelectionRange(0, 99999); 
        document.execCommand("copy");
        alert("Copied: " + copy.value);
    }
