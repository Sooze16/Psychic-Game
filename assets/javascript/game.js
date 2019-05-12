



//Working with Tutor to identify the variables and pseudocode the project - per Phil, I needed a var index = 0 that was missing from the code.

var index = 0;
var computerLetter = "";
var wins = 0
var losses = 0
var remainingGuesses = 9
var lettersUsed = ""

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var x = document.getElementById("lettersUsed");


// if the game is opened, the computer picks a letter and does not display it to the player. 
// the player chooses a letter (it is automatically converted to lower case to match the array) and the counters change.
// see conditional comments below...
document.onkeyup = function (event) {
  console.log("myletter:", event.key)
 var keypressed= event.key.toLowerCase();
  console.log("lettersUsed" +  lettersUsed.indexOf(keypressed) );
  //(Dave explained key numeric values so this line - to Madeleine and was also slacked by Eran - Madeleine shared with me would work to exclude non letter keys)if keyCode is outside of 65-90, ignore (compare "player letter" with the computerletter; if guess does not match index, then ALERT and do not update "# of remaining guesses" or "letters tried")
  if (event.keyCode > 90 || event.keyCode < 65) {
    alert("That's not a letter. Please pick a letter.")
  }
  //(Phil assisted Madelein and me with this expression after class - this was to forego another loop.  Wehad keycode instead of keypress - made a difference.
  else if (lettersUsed.indexOf(keypressed) > -1) {
    alert("You've tried this letter. Please pick a different letter.");
  }
  else {
    //if between 65-90, proceeds to next IF/ELSE, line 32/40 

    var letterClick = event.key.toLowerCase();

    // Should the player and computer match - the game is restarted and the user scores.
    if (computerLetter === letterClick) {
      wins++
      document.querySelector("#wins").innerHTML = " " + wins
      restart()
    }

    // Conditional statement should the user not chose the correct letter the computer needs to update the letters used and guesses remaining.
    else {
      remainingGuesses--;
      if (lettersUsed !== "") {
        lettersUsed = lettersUsed + " , " + letterClick;
      }
      else {
        lettersUsed = " " + lettersUsed + letterClick;
      }

      // The statement used to update the text in HTML when user does not match.
      document.querySelector("#lettersUsed").innerHTML = lettersUsed
      document.querySelector("#remainingGuesses").innerHTML = " " + remainingGuesses
    }

    // This is the statement that will restart the game and update the losses and reset the guesses.
    if (remainingGuesses === 0) {
      losses++
      document.querySelector("#losses").innerHTML = " " + losses
      document.querySelector("#computerLetter").innerHTML = " " + computerLetter
      restart()
    }


  }
}

// creates random string choices that are stored as console log
function calculateComputer() {
  index = Math.floor(Math.random() * alphabet.length)
  computerLetter = alphabet[index]
  console.log("computer: ", computerLetter)
}

//game results
function start() {
  console.log("start")
  document.querySelector("#wins").innerHTML = " 0"   //clear all the variables
  document.querySelector("#losses").innerHTML = " 0"   //clear all the variables
  document.querySelector("#remainingGuesses").innerHTML = " 8"
  calculateComputer()
}

//clear board and restart the game after win or all guesses are used
function restart() {
  document.querySelector("#lettersUsed").innerHTML = ""
  document.querySelector("#remainingGuesses").innerHTML = " 9"
  remainingGuesses = 9
  lettersUsed = ""
  calculateComputer()
}

start()