//Virtual Teacher AI
function italianTeacher() {
var italianConversation = document.getElementById("speakItalian").value; var response;

if (italianConversation == "Ciao") {

response = "Ciao, come stai?";
}

if (italianConversation == "ciao") {

response = "Ciao, come stai?";
}

if (italianConversation == "Bene") {

response = "Ottimo! Anch'io. Arrivederci.";
}


if (italianConversation == "bene") {

response = "Ottimo.  Anch'io. Arrivederci.";
}

document.getElementById("italianResponse").innerHTML = response;
}

//Quiz I
function correct() {

  document.getElementById("quizoneresponse").innerHTML="Correct";
}

function incorrect() {

  document.getElementById("quizoneresponse").innerHTML="Incorrect";
}

//Display Colors
function colorDisplay() {

document.querySelector("#rosso").style.color="red";

}

function colorDisplay2() {

document.querySelector("#verde").style.color="green";

}

function colorDisplay3() {

document.querySelector("#bianco").style.color="white";

}

//Exit
var name = prompt("What is your name?")
function beforeYouGo() {
document.write("Goodbye " + name + ". " + "The Condello School of Italian wants to thank you for using this free educational resource.  It is hoped that this website has helped you on your journey to becoming a fluent participant in the Italian language.  Please come back to visit us again.  We appreciate the time you have taken to study Italian with this Italian language school.");
}


