// alert('ciao');

var userName = prompt('What is your name ?');
var userAge = prompt('How hold are you');
var userFavouriteColor = prompt('What is your favourite color');

console.log(userName, userAge, userFavouriteColor);

document.getElementById("username").innerHTML =
  "Hello " + userName + "! How are you today? How hold are you?";

document.getElementById("userage").innerHTML =
  "I see " + userAge + "! So you were born in 1985. What is your favourite color ?";

document.getElementById("userfavouritecolor").innerHTML =
  "Oh " + userFavouriteColor + "! Red is a lovely color";



