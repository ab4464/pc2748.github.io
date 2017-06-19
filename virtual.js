//Virtual Teacher AI

function italianTeacher() { //This function creates the AI for the virtual Italian teacher.
  
  var italianConversation = document.getElementById("speakItalian").value; var response; //This code stores user input in a variable.

  if (italianConversation == "Ciao") {  //This is an if statement.  It determines what the virtual Italian teacher says.
  response = "Ciao, come stai?";
  }

  if (italianConversation == "ciao") {  //The virtual Italian teacher can respond to words typed different ways.
  response = "Ciao, come stai?";        
  }

  if (italianConversation == "Bene") {  //The AI recognizes the Italian word for "well."
  response = "Ottimo! Anch'io. Arrivederci.";
  }


  if (italianConversation == "bene") {
  response = "Ottimo.  Anch'io. Arrivederci.";  //This response is given when the AI recognizes the Italian word for "well."
  }

  document.getElementById("italianResponse").innerHTML = response; //This code sends the AI response to the HTML.
  }

//Quiz 

function correct() {  //This function outputs a response to a correct answer.
  document.getElementById("quizoneresponse").innerHTML="Correct"; //This code displays the word "correct" in a specific element of the website.
}


function incorrect() {  //This function outputs a response to an incorrect answer.
  document.getElementById("quizoneresponse").innerHTML="Incorrect"; //This code displays the word "incorrect" in a specific element of the website.
} 

//Display Colors

function colorDisplay() { //This function turns an element red.
  document.querySelector("#rosso").style.color="red"; //This code targets the element that will be changed red.
}

function colorDisplay2() { //This function turns an element green.
  document.querySelector("#verde").style.color="green"; //This code targets the element that will be changed green.
}

function colorDisplay3() { //This function turns an element white.
  document.querySelector("#bianco").style.color="white"; //This code targets the element that will be changed white.
}

//Image Match JS Code

//This function notifies the user that the correct picture has been selected.
function rightImage() {
     document.getElementById("answer").innerHTML = "Nice work.";
}
//This function notifies the user that the incorrect picture has been selected.
function wrongImage() {
     document.getElementById("answer").innerHTML = "Nice try.";
}

//Exit

var name = prompt("What is your name?") //This code collects a user's name.

function beforeYouGo() { //This code thanks the user by name for using the website.
  document.write("Goodbye " + name + ". " + "The Condello School of Italian wants to thank you for using this free educational resource.  It is hoped that this website has helped you on your journey to becoming a fluent participant in the Italian language.  Please come back to visit us again.  We appreciate the time you have taken to study Italian with this Italian language school.");
}




