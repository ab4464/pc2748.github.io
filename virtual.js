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


//Sentence Match JS Code

//Create a function that accepts a food type and adds it to an Italian sentence.
function sentenceCreation (foodChoice) { 

  //This variable accepts a food type.
  var foodChoice = document.getElementById("foodInput").value;

  //This code creates a sentence in Italian with the user input.
  document.getElementById("answerConnect").innerHTML = "La " + foodChoice + " è deliziosa.";
} 


//Listening Practice App

function italianTeacher2() { //This function operates the Listening Practice app.
  var italianConversation2 = document.getElementById("speakItalian2").value; var response; //This code stores user input in a variable.

  if (italianConversation2 == "Come va?") {  //This is an if statement.  It determines the response that displays.
    response = answerAnalyzer[0].answerType1[0];
  }

  if (italianConversation2 == "Come stai?") {  //The Listening Practice app can respond to words typed different ways.
    response = answerAnalyzer[0].answerType1[1];        
  }
  
  if (italianConversation2 == "Ciao") {  //The Listening Practice app recognizes this incorrect response.
    response = answerAnalyzer[1].answerType2[0];
  }

  if (italianConversation2 == "How's it going?") {  //The app recognizes English.
    response = answerAnalyzer[1].answerType2[1];  //This response is for an answer in English.
  }
  
    document.getElementById("italianResponse2").innerHTML = response; //This code sends the app response to the HTML.
  }

//JS code for Fibonacci's Code app
function activate()  {//Activate number analyzer.
 
 //Retrieve number.
 var userInput = document.getElementById("receiver").value;

 //Analyze number value with a for loop.
 for (i = userInput; i < 3; i++) {
 document.getElementById("rightNumber").innerHTML = "You got it.";
   }
}
