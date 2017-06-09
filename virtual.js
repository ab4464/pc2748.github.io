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

//Quiz II

function notright() {

  document.getElementById("quiztworesponse").innerHTML="Not right";
}

function right() {

  document.getElementById("quiztworesponse").innerHTML="Right";
}

//Quiz III
function thatsit() {

  document.getElementById("quiztworesponse").innerHTML="That's it";
}

function thatsnotit() {

  document.getElementById("quiztworesponse").innerHTML="That's not it";
}
