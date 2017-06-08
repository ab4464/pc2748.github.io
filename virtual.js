function italianTeacher() {
var italianConversation = document.getElementById("speakItalian").value; var response;

if (italianConversation == "Ciao") {

response = "Ciao, come stai?: Hello, how are you?";
}

if (italianConversation == "ciao") {

response = "Ciao, come stai?";
}

if (italianConversation == "Bene") {

response = "Ottimo! Anch'io. Arrivederci.";
}


if (italianConversation == "bene") {

response = "Ottimo.  Anch'io: Excellent, I am too.";
}

document.getElementById("italianResponse").innerHTML = response;
}
