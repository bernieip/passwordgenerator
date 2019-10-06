// The randomCharacters variable is all possible characters used in the password
// The outputPassword is an empty variable the characters will be going into
// The copyText variable is to select the text within the output text box

var randomCharacters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
var outputPassword=''
var copyText = document.getElementById("output")

// The randomPassword function will create a random password by looping a number of characters base on the length entered by the user.
// It will also check the length of the password if its between 8 to 128 characters long, if not it'll prompt an error

function randomPassword(passwordLength){
outputPassword=''
for (i=0;i<passwordLength;i++)
outputPassword+=randomCharacters.charAt(Math.floor(Math.random()*randomCharacters.length))

if (i < 8 || i > 128){
    alert("*ERROR* Your password must be between 8 to 128 characters long");
}
else {
return outputPassword
}
}
// The showPassword function will show the output of the randomPassword function in the textbox

function showPassword(enterlength){
document.generatePassword.output.value=randomPassword(enterlength)
}

// The copyPassword function will select and copy the value in the textbox to the clipboard.

function copyPassword() {
copyText.select()
document.execCommand("copy");
}