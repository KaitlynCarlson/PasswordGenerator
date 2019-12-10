
 


/** Prompting user to input desirable password character length. Limited to a minimum of 8 characters 
 and a maximum of 128 characters. */

var yourPasswordLength = prompt('Your password can be between 8 and 128 characters. What length do you require?');

if (yourPasswordLength >= 8 && yourPasswordLength <= 128) {
    alert('yourPasswordLength + characters');

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
console.log(yourPasswordSpecialCharacters);
console.log(yourPasswordUpperCaseCharacters);
console.log(yourPasswordLowerCaseCharacters);


// Variables available to randomly chose from within the user selected parameters


var numericCharacters = ["1 2 3 4 5 6 7 8 9"];
var lowerCaseCharacters = ["qwertyuiopasdfghjklzxcvbnm"];
var upperCaseCharacters = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
var specialCharacters = ["! @ # $ % ^ & * _ +"];
var numericLower = ["1 2 3 4 5 6 7 8 9 qwertyuiopasdfghjklzxcvbnm"];
var numericLowerUpper = ["1 2 3 4 5 6 7 8 9 qwertyuiQWERTYUIOPASDFGHJKLZXCVBNMopasdfghjklzxcvbnm"];
var numericLowerUpperSpecial = ["1 2 3 4 5 6 7 8 9 qwertyuiQWERTYUIOPASDFGHJKLZXCVBNMopasdfghjklzxcvbnm! @ # $ % ^ & * _ +"];
var lowerUpper = ["qwertyuiQWERTYUIOPASDFGHJKLZXCVBNMopasdfghjklzxcvbnm"];
var lowerUpperSpecial = ["qwertyuiQWERTYUIOPASDFGHJKLZXCVBNMopasdfghjklzxcvbnm! @ # $ % ^ & * _ +"];
var lowerSpecial = ["! @ # $ % ^ & * _ +qwertyuiopasdfghjklzxcvbnm"];
var upperSpecial = ["QWERTYUIOPASDFGHJKLZXCVBNM! @ # $ % ^ & * _ +"];
var numericSpecial = ["1 2 3 4 5 6 7 8 9! @ # $ % ^ & * _ +"];
var numericUpper= ["1 2 3 4 5 6 7 8 9 QWERTYUIOPASDFGHJKLZXCVBNM"];
var numericUpperSpecial = ["! @ # $ % ^ & * _ + 1 2 3 4 5 6 7 8 9 QWERTYUIOPASDFGHJKLZXCVBNM"];
var password = "";


    for (var i = 0; i = yourPasswordLength; i++) {
        if ( yourPasswordSpecialCharacters === true && yourPasswordNumericCharacters === false && yourPasswordUpperCaseCharacters===false && yourPasswordLowerCaseCharacters===false) {
        password = specialCharacters[Math.floor(Math.random()* specialCharacters.length - 1)];
    } 
    console.log(password);
}
